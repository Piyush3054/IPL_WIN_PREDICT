from flask import Flask, jsonify, request
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
import pandas as pd
import pickle
from flask_cors import CORS

team_perfo = pd.read_csv(r"C:\Users\piyus\OneDrive\Desktop\Node JS Programs\ipl-win-predector\ipl-win-predector-backend\Documents\IPL_TeamPerformance.csv")
player_perfo = pd.read_csv(r"C:\Users\piyus\OneDrive\Desktop\Node JS Programs\ipl-win-predector\ipl-win-predector-backend\Documents\IPL_PlayerPerformance.csv")
head_to_head1 = pd.read_csv(r"C:\Users\piyus\OneDrive\Desktop\Node JS Programs\ipl-win-predector\ipl-win-predector-backend\Documents\IPL_HeadToHead.csv")
pipe = pickle.load(open('pipe.pkl','rb'))
# pipe = pickle.load(open('new_pipe.pkl','rb'))
# pipe = pickle.load(open('pippe.pkl','rb'))

app = Flask(__name__)
CORS(app)

@app.route('/api/endpoint', methods=['POST'])
def handle_post():
    data = request.get_json()
    selectedTeam1 = data['team1']
    selectedTeam2 = data['team2']
    tossWinner = data['tossWinner']
    tossDecision = data['tossDecision']
    venue = data['venue']
    t1players = data.get('selectedT1Players', [])
    t2players = data.get('selectedT2Players', [])
    matchNumer = data['matchNumber']

    # print(selectedTeam1 + selectedTeam2 + tossWinner + tossDecision)
    # print(t1players[0] if t1players else None)
    # print(t2players[0] if t2players else None)


    #Making new Dataframe
    input_df = pd.DataFrame({'Team1':[selectedTeam1],'Team2':[selectedTeam2],'City':[venue],'TossWinner':[tossWinner],'TossDecision':[tossDecision],'MatchNumer':[matchNumer]})
    input_df['T1_P1'] = t1players[0]
    input_df['T1_P2'] = t1players[1]
    input_df['T1_P3'] = t1players[2]
    input_df['T1_P4'] = t1players[3]
    input_df['T1_P5'] = t1players[4]
    input_df['T1_P6'] = t1players[5]
    input_df['T1_P7'] = t1players[6]
    input_df['T1_P8'] = t1players[7]
    input_df['T1_P9'] = t1players[8]
    input_df['T1_P10'] = t1players[9]
    input_df['T1_P11'] = t1players[10]

    input_df['TossWinnner'] = input_df.apply(tosswinner,axis=1)

    T1_P_columns = [f'T1_P{i}' for i in range(1, 12)]
    for player_column in T1_P_columns:
        input_df = pd.merge(input_df, player_perfo[['Player','BattingAverage','BowlingAverage','Strike Rate','Economy Rate']], left_on=player_column, right_on='Player', how='left')
        input_df.drop(['Player', player_column], axis=1, inplace=True)
        input_df.rename(
            {
                'BattingAverage': f'{player_column}BattingAverage',
                'BowlingAverage': f'{player_column}BowlingAverage',
                'Strike Rate': f'{player_column}StrikeRate',
                'Economy Rate': f'{player_column}EconomyRate',
            },
            axis=1,
            inplace=True
        )

    input_df['T2_P1'] = t2players[0]
    input_df['T2_P2'] = t2players[1]
    input_df['T2_P3'] = t2players[2]
    input_df['T2_P4'] = t2players[3]
    input_df['T2_P5'] = t2players[4]
    input_df['T2_P6'] = t2players[5]
    input_df['T2_P7'] = t2players[6]
    input_df['T2_P8'] = t2players[7]
    input_df['T2_P9'] = t2players[8]
    input_df['T2_P10'] = t2players[9]
    input_df['T2_P11'] = t2players[10]

    T2_P_columns = [f'T2_P{i}' for i in range(1, 12)]
    for player_column in T2_P_columns:
        input_df = pd.merge(input_df, player_perfo[['Player','BattingAverage','BowlingAverage','Strike Rate','Economy Rate']], left_on=player_column, right_on='Player', how='left')
        input_df.drop(['Player', player_column], axis=1, inplace=True)
        input_df.rename(
            {
                'BattingAverage': f'{player_column}BattingAverage',
                'BowlingAverage': f'{player_column}BowlingAverage',
                'Strike Rate': f'{player_column}StrikeRate',
                'Economy Rate': f'{player_column}EconomyRate',
            },
            axis=1,
            inplace=True
        )

    

    input_df.fillna(value=0,inplace=True)

    T1_P_columns = [f'T1_P{i}' for i in range(1,12)]
    count = 0
    batting_average_sum = 0
    for index, row in input_df.iterrows():
        player_averages = [row[f'{player_column}BattingAverage'] for player_column in T1_P_columns]
        valid_averages = [avg for avg in player_averages if avg > 0]
        input_df.at[index, 'Team1BattingAverage'] = sum(valid_averages) / len(valid_averages) if len(valid_averages) > 0 else 0

    T2_P_columns = [f'T2_P{i}' for i in range(1,12)]
    count = 0
    batting_average_sum = 0
    for index, row in input_df.iterrows():
        player_averages = [row[f'{player_column}BattingAverage'] for player_column in T2_P_columns]
        valid_averages = [avg for avg in player_averages if avg > 0]
        input_df.at[index, 'Team2BattingAverage'] = sum(valid_averages) / len(valid_averages) if len(valid_averages) > 0 else 0

    count = 0
    bowling_average_sum = 0
    for index, row in input_df.iterrows():
        player_averages = [row[f'{player_column}BowlingAverage'] for player_column in T1_P_columns]
        valid_averages = [avg for avg in player_averages if avg > 0]
        input_df.at[index, 'Team1BowlingAverage'] = sum(valid_averages) / len(valid_averages) if len(valid_averages) > 0 else 0

    count = 0
    bowling_average_sum = 0
    for index, row in input_df.iterrows():
        player_averages = [row[f'{player_column}BowlingAverage'] for player_column in T2_P_columns]
        valid_averages = [avg for avg in player_averages if avg > 0]
        input_df.at[index, 'Team2BowlingAverage'] = sum(valid_averages) / len(valid_averages) if len(valid_averages) > 0 else 0

    count = 0
    strike_rate_sum = 0
    for index, row in input_df.iterrows():
        player_strikerate = [row[f'{player_column}StrikeRate'] for player_column in T1_P_columns]
        valid_strikerate = [sr for sr in player_strikerate if sr > 0]
        input_df.at[index, 'Team1StrikeRate'] = sum(valid_strikerate) / len(valid_strikerate) if len(valid_strikerate) > 0 else 0

    count = 0
    strike_rate_sum = 0
    for index, row in input_df.iterrows():
        player_strikerate = [row[f'{player_column}StrikeRate'] for player_column in T2_P_columns]
        valid_strikerate = [sr for sr in player_strikerate if sr > 0]
        input_df.at[index, 'Team2StrikeRate'] = sum(valid_strikerate) / len(valid_strikerate) if len(valid_strikerate) > 0 else 0

    count = 0
    economy_rate_sum = 0
    for index, row in input_df.iterrows():
        player_economyrate = [row[f'{player_column}EconomyRate'] for player_column in T1_P_columns]
        valid_economyrate = [er for er in player_economyrate if er > 0]
        input_df.at[index, 'Team1EconomyRate'] = sum(valid_economyrate) / len(valid_economyrate) if len(valid_economyrate) > 0 else 0

    count = 0
    economy_rate_sum = 0
    for index, row in input_df.iterrows():
        player_economyrate = [row[f'{player_column}EconomyRate'] for player_column in T2_P_columns]
        valid_economyrate = [er for er in player_economyrate if er > 0]
        input_df.at[index, 'Team2EconomyRate'] = sum(valid_economyrate) / len(valid_economyrate) if len(valid_economyrate) > 0 else 0

    input_df = input_df[['Team1','Team2','City','MatchNumer','TossWinner','TossDecision','Team1BattingAverage','Team2BattingAverage','Team1BowlingAverage','Team2BowlingAverage','Team1StrikeRate','Team2StrikeRate','Team1EconomyRate','Team2EconomyRate']].copy()
    # input_df = input_df['Team1','Team2','City','TossWinner','TossDecision','Team1BattingAverage','Team2BattingAverage','Team1BowlingAverage','Team2BowlingAverage','Team1StrikeRate','Team2StrikeRate','Team1EconomyRate','Team2EconomyRate','MatchNumer']

    input_df = pd.merge(input_df,team_perfo[['Team','HomeGround','WinningPercentage']],left_on='Team1',right_on='Team',how='left')
    input_df.drop(['Team'],axis=1,inplace=True)

    input_df = pd.merge(input_df,team_perfo[['Team','HomeGround','WinningPercentage']],left_on='Team2',right_on='Team',how='left')
    input_df.drop(['Team'],axis=1,inplace=True)

    input_df['BattingFirst'] = input_df.apply(battingfirst,axis=1)
    input_df['BowlingFirst'] = input_df.apply(bowlingfirst,axis=1)
    input_df['HomeGround'] = input_df.apply(HomeGround,axis=1)
    input_df.drop(['HomeGround_x','HomeGround_y'],axis=1,inplace=True)

    input_df = pd.merge(input_df, head_to_head1, left_on=['Team1', 'Team2'], right_on=['Team1', 'Team2'])
    input_df = input_df.apply(head_to_head, axis=1)

    #print(input_df)

    team_encoding = {'Chennai Super Kings':0,'Royal Challengers Bangalore':11,'Delhi Capitals':1,'Gujarat Titans':2,'Kochi Tuskers Kerala':3,'Kolkata Knight Riders':4,'Lucknow Super Giants':5,'Mumbai Indians':6,'Pune Warriors':7,'Rising Pune Supergiants':10,'Punjab Kings':8,'Rajasthan Royals':9,'Sunrisers Hyderabad':12}
    input_df['Team1'] = input_df['Team1'].map(team_encoding)
    input_df['Team2'] = input_df['Team2'].map(team_encoding)
    input_df['TossWinner'] = input_df['TossWinner'].map(team_encoding)
    

    toss_encoding = {'Batting':0,'Bowling':1}
    input_df['TossDecision'] = input_df['TossDecision'].map(toss_encoding)

    city_encoding = {'Ahmedabad':1,'Mumbai':22,'Banglore':2,'Kolkata':21,'Pune':26,'Dubai':11,'Sharjah':30,'Abu Dhabi':0,'Delhi':9,'Cape Town':4,'Chennai':7,'Hydrabad':14,'Visakhapatnam':31,'Chandigarh':6,'Jaipur':16,'Bloemfontein':3,'Centorion':5,'Durban':12,'Cuttack':8,'Dharamsala':10,'East London':13,'Indore':15}
    input_df['City'] = input_df['City'].map(city_encoding)

    encoding = {'Team1':0,'Team2':1}
    input_df['BattingFirst'] = input_df['BattingFirst'].map(encoding)
    input_df['BowlingFirst'] = input_df['BowlingFirst'].map(encoding)
    

    home_encoding = {'Neutral':0,'Team1':1,'Team2':2}
    input_df['HomeGround'] = input_df['HomeGround'].map(home_encoding)


    # label_encoder = LabelEncoder()
    # encode_columns = ['Team1','Team2','City','TossWinner','TossDecision','BattingFirst']
                  
    # for column in encode_columns:
    #     input_df[column] = label_encoder.fit_transform(input_df[column])

    input_df.drop(['Team1Wins','Team2Wins','Matches'],axis=1,inplace=True)
    columns = input_df.columns.tolist()
    
    print(input_df)
    
    # sc = StandardScaler()
    # for column in columns:
    #     input_df[column] = sc.fit_transform(input_df[[column]])

    input_df = input_df[['Team1','Team2','City','TossWinner','TossDecision','HomeGround','MatchNumer','BattingFirst','BowlingFirst','Team1BattingAverage', 'Team2BattingAverage', 'Team1BowlingAverage', 'Team2BowlingAverage', 'Team1StrikeRate', 'Team2StrikeRate', 'Team1EconomyRate', 'Team2EconomyRate', 'WinningPercentage_x', 'WinningPercentage_y','Team1WinPercent','Team2WinPercent']]  # Features (all columns except the target)
    result = pipe.predict_proba(input_df)
    team2 = result[0][0]
    team1 = result[0][1]

    print(team2)
    print(team1)
    print(input_df)
    input_df.to_csv("C:\\Users\\piyus\\Downloads\\GTA V\\x.csv")

    # Correct the return statement
    return jsonify({'team1Result': team2,'team2Result': team1}), 200

def battingfirst(row):
    if row['Team1'] == row['TossWinner']:
        if row['TossDecision'] == 'Batting':
            return "Team1"
        else:
            return "Team2"
    elif row['Team2'] == row['TossWinner']:
        if row['TossDecision'] == 'Batting':
            return "Team2"
        else:
            return "Team1"
        
def bowlingfirst(row):
    if row['Team1'] == row['TossWinner']:
        if row['TossDecision'] == 'Batting':
            return "Team2"
        else:
            return "Team1"
    elif row['Team2'] == row['TossWinner']:
        if row['TossDecision'] == 'Batting':
            return "Team1"
        else:
            return "Team2"
            
def head_to_head(row):
    if row['Matches']!=0:
        row['Team1WinPercent'] = row['Team1Wins']/row['Matches']
        row['Team2WinPercent'] = row['Team2Wins']/row['Matches']
    else:
        row['Team1WinPercent'] = 0
        row['Team2WinPercent'] = 0
    return row

def HomeGround(row):
    if row['City'] == row['HomeGround_x']:
        return "Team1"
    elif row['City'] == row['HomeGround_y']:
        return "Team2"
    else:
        return "Neutral"
        
def tosswinner(row):
    if row['Team1'] == row['TossWinner']:
        return "Team1"
    else:
        return "Team2"
    


@app.route('/api/livePredict', methods=['POST'])
def handle_live():
    data = request.get_json()
    selectedTeam1 = data['team1']
    selectedTeam2 = data['team2']
    tossWinner = data['tossWinner']
    tossDecision = data['tossDecision']
    venue = data['venue']
    t1players = data.get('selectedT1Players', [])
    t2players = data.get('selectedT2Players', [])
    currentScore = data['currentScore']
    ballLeft = data['ballLeft']
    wicket = data['wicket']
    currentRunRate = data['currentRunRate']






if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)