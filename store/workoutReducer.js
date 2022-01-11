const initialState = {
    isLoading: false,
    workouts: {
        "count": 2722,
        "next": "https://rowsandall.com/rowers/api/workouts/?limit=20&offset=20",
        "previous": null,
        "results": [
            {
                "id": 157409,
                "name": "Enschede / Enschede, De Wildernis",
                "date": "2022-01-11",
                "workouttype": "Run",
                "starttime": "11:11:20",
                "distance": 10632,
                "duration": "01:07:49",
                "averagehr": 150,
                "maxhr": 167,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/fd97238adb-20220111-115336.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|10632|01:07:49.0|03:11.4|000.0|70.6|150.4|167.0|02.2\nW-|10632|01:07:49.0|03:11.3|000.0|70.6|150.4|167.0|02.2\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|167.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|10632|07:49.0|03:11.3|000.0|70.6|150.4|167.0|02.2\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 157410,
                "name": "Enschede",
                "date": "2022-01-10",
                "workouttype": "Walk",
                "starttime": "13:16:03",
                "distance": 2845,
                "duration": "00:50:33",
                "averagehr": 89,
                "maxhr": 119,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/7d8b143a11-20220111-115358.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|02845|00:50:33.0|08:53.0|000.0|40.6|081.5|119.0|01.4\nW-|02845|00:50:33.0|08:53.0|000.0|40.6|081.5|119.0|01.4\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|119.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|02845|50:33.0|08:53.0|000.0|40.6|081.5|119.0|01.4\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 157411,
                "name": "Enschede",
                "date": "2022-01-09",
                "workouttype": "Walk",
                "starttime": "14:12:02",
                "distance": 5241,
                "duration": "01:07:08",
                "averagehr": 91,
                "maxhr": 107,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/d6072ff062-20220111-115414.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|05241|01:07:08.0|06:24.3|000.0|44.0|091.0|107.0|01.8\nW-|05242|01:07:08.0|06:24.2|000.0|44.0|091.0|107.0|01.8\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|107.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|05242|07:08.0|06:24.2|000.0|44.0|091.0|107.0|01.8\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156985,
                "name": "Cooling down",
                "date": "2022-01-09",
                "workouttype": "rower",
                "starttime": "10:44:57",
                "distance": 2003,
                "duration": "00:08:51.800000",
                "averagehr": 149,
                "maxhr": 158,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/9256647f69-20220109-095622.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|02003|00:08:49.9|02:12.3|151.6|20.9|149.8|158.0|10.8\nW-|02003|00:08:50.1|02:12.3|151.6|20.9|149.8|158.0|10.8\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|158.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01123|04:58.3|02:12.8|148.3|20.9|145.1|153.0|10.8\n01|00880|03:51.8|02:11.7|155.9|21.0|155.8|158.0|10.8\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156986,
                "name": "Cheops (Pete Plan Pyramid) by time",
                "date": "2022-01-09",
                "workouttype": "rower",
                "starttime": "10:12:13",
                "distance": 7229,
                "duration": "00:32:05.700000",
                "averagehr": 158,
                "maxhr": 179,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/19fba5b32e-20220109-095632.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|07224|00:32:02.0|02:13.0|172.7|23.0|158.9|179.0|09.8\nW-|05326|00:21:39.5|02:02.0|272.5|27.6|163.6|179.0|08.9\nR-|01896|00:30:09.3|07:57.1|075.0|18.5|154.8|179.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|00254|00:52.4|01:43.3|275.0|27.5|132.7|154.0|10.6\n01|00541|02:04.0|01:54.7|267.1|27.8|164.1|172.0|09.4\n02|01381|06:03.7|02:11.7|267.1|27.1|167.2|176.0|08.4\n03|01108|04:00.9|01:48.7|276.4|28.0|169.4|179.0|09.8\n04|01338|06:04.0|02:16.0|269.8|27.7|163.8|175.0|08.0\n05|00428|01:31.7|01:47.2|285.6|28.5|156.5|170.0|09.8\n06|00272|00:59.6|01:49.5|310.9|29.0|153.1|166.0|09.5\n07|00005|00:03.2|05:13.8|000.0|00.0|159.0|159.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156987,
                "name": "Warming up",
                "date": "2022-01-09",
                "workouttype": "rower",
                "starttime": "10:01:31",
                "distance": 2008,
                "duration": "00:08:25.800000",
                "averagehr": 147,
                "maxhr": 164,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/7ec14a08b0-20220109-095640.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|02008|00:08:23.7|02:05.4|180.8|22.5|147.6|164.0|10.6\nW-|02008|00:08:23.9|02:05.4|180.8|22.5|147.6|164.0|10.7\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|164.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01171|04:53.3|02:05.2|177.0|21.7|138.8|160.0|11.0\n01|00838|03:30.6|02:05.7|186.1|23.5|159.9|164.0|10.2\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156806,
                "name": "Core Training",
                "date": "2022-01-07",
                "workouttype": "Workout",
                "starttime": "10:39:47",
                "distance": 0,
                "duration": "00:29:27",
                "averagehr": 97,
                "maxhr": 135,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/a3ac9bcbdc-20220107-102344.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|00000|00:29:27.0|00:00.0|000.0|0.0|097.2|135.0|00.0\nW-|00000|00:29:27.0|16:40.0|000.0|00.0|097.2|135.0|00.0\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|135.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156667,
                "name": "Steady",
                "date": "2022-01-06",
                "workouttype": "rower",
                "starttime": "13:39:26",
                "distance": 18006,
                "duration": "01:15:41.200000",
                "averagehr": 157,
                "maxhr": 176,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/28e81ce40f-20220106-135822.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|17998|01:15:38.4|02:06.1|178.5|21.5|157.5|176.0|11.1\nW-|18007|01:15:39.1|02:06.0|178.5|21.5|157.5|176.0|11.1\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|176.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01158|04:56.3|02:07.9|177.9|21.0|111.4|139.0|11.2\n01|01217|05:02.3|02:04.2|183.0|21.2|144.9|154.0|11.4\n02|01215|05:01.3|02:04.0|184.3|21.2|150.2|155.0|11.4\n03|01211|05:02.4|02:04.9|182.5|21.3|154.2|159.0|11.3\n04|01214|05:00.3|02:03.7|184.5|21.7|157.9|159.0|11.2\n05|01227|05:00.3|02:02.4|190.7|21.8|161.3|165.0|11.2\n06|01235|04:58.2|02:00.8|199.6|22.6|165.8|176.0|11.0\n07|01192|04:55.5|02:04.0|183.8|21.7|165.8|175.0|11.2\n08|01241|05:05.1|02:03.0|193.1|22.2|167.1|175.0|11.0\n09|01201|05:01.5|02:05.5|176.7|21.6|161.8|164.0|11.1\n10|01191|04:57.4|02:04.8|180.4|21.9|164.3|167.0|11.0\n11|01178|04:56.3|02:05.8|176.0|21.6|164.0|164.0|11.0\n12|01126|05:11.4|02:18.3|146.3|20.0|164.0|164.0|10.9\n13|01178|05:11.4|02:12.2|159.5|20.9|164.0|164.0|10.8\n14|01136|04:53.2|02:09.1|162.5|21.4|164.0|164.0|10.9\n15|00089|00:26.2|02:27.3|151.9|21.1|164.0|164.0|09.6\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156540,
                "name": "2x met Floor",
                "date": "2022-01-05",
                "workouttype": "water",
                "starttime": "12:34:48",
                "distance": 10504,
                "duration": "00:57:38",
                "averagehr": 135,
                "maxhr": 178,
                "notes": null,
                "summary": "Workout Summary - JustGo-10504M\n--|Total|--Total---|--Avg--|-Avg-|-Avg--|-Avg-|-Max-|-Avg\n--|Dist-|--Time----|-Pace--|-Pwr-|-SPM--|-HR--|-HR--|-DPS\n--|10505|00:57:38.1|02:45.0|000.0| 23.0 |136.0|178.0|09.2\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|-SPM--|-AvgHR-|DPS-\n01|10504|57:38.1|02:45.0| 000 | 23.0 | 135.0 |09.2\n",
                "boattype": "2x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156415,
                "name": "Steady on zwift",
                "date": "2022-01-04",
                "workouttype": "rower",
                "starttime": "13:16:05",
                "distance": 16624,
                "duration": "01:11:15.300000",
                "averagehr": 151,
                "maxhr": 169,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/b8d0fbc124-20220104-132922.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|16618|01:11:13.2|02:08.6|167.6|20.7|151.4|169.0|11.3\nW-|16625|01:11:13.9|02:08.5|167.6|20.7|151.4|169.0|11.3\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|169.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01154|04:52.3|02:06.6|167.6|20.5|101.1|132.0|11.6\n01|01149|04:59.3|02:10.3|166.5|20.4|136.1|141.0|11.3\n02|01182|05:12.4|02:12.2|160.6|19.1|138.0|142.0|11.9\n03|01198|05:00.3|02:05.4|178.1|21.0|149.5|156.0|11.4\n04|01169|04:57.3|02:07.1|171.0|20.4|152.6|157.0|11.6\n05|01206|05:01.1|02:04.8|182.5|21.5|157.4|163.0|11.2\n06|01173|05:01.5|02:08.5|167.7|20.2|158.6|165.0|11.6\n07|01210|04:57.3|02:02.8|188.3|21.8|163.7|168.0|11.2\n08|01203|05:04.3|02:06.5|173.0|20.6|164.5|168.0|11.5\n09|01208|05:00.4|02:04.3|182.0|21.8|164.2|167.0|11.0\n10|01155|04:56.3|02:08.2|165.7|20.5|163.9|169.0|11.4\n11|01178|04:57.2|02:06.1|176.1|21.9|163.7|167.0|10.9\n12|01136|05:09.5|02:16.1|145.6|20.7|157.4|168.0|10.7\n13|01085|05:00.3|02:18.4|133.0|20.0|149.6|156.0|10.8\n14|00218|01:04.5|02:28.0|118.8|19.5|144.2|145.0|10.4\n",
                "boattype": "1x",
                "timezone": "Europe/Prague",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156267,
                "name": "Enschede",
                "date": "2022-01-03",
                "workouttype": "Run",
                "starttime": "12:27:18",
                "distance": 10157,
                "duration": "00:59:59",
                "averagehr": 152,
                "maxhr": 168,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/8762d7d8c9-20220103-124827.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|10157|00:59:59.0|02:57.2|000.0|73.1|152.1|168.0|02.3\nW-|10158|00:59:59.0|02:57.2|000.0|73.1|152.1|168.0|02.3\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|168.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|10158|59:59.0|02:57.2|000.0|73.1|152.1|168.0|02.3\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156106,
                "name": "Hezingen - Mander",
                "date": "2022-01-01",
                "workouttype": "Walk",
                "starttime": "12:54:26",
                "distance": 7605,
                "duration": "01:38:07",
                "averagehr": 86,
                "maxhr": 108,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/e275c8160f-20220101-143204.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|07605|01:38:07.0|06:27.0|000.0|46.6|086.2|108.0|01.7\nW-|07606|01:38:07.0|06:27.0|000.0|46.6|086.2|108.0|01.7\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|108.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|07606|38:07.0|06:27.0|000.0|46.6|086.2|108.0|01.7\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156038,
                "name": "Ride Home after Booster",
                "date": "2021-12-31",
                "workouttype": "bike",
                "starttime": "14:04:12",
                "distance": 5328,
                "duration": "00:21:27",
                "averagehr": 107,
                "maxhr": 125,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/a7529f6994-20211231-143725.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|05328|00:21:27.0|02:00.8|000.0|0.0|107.5|125.0|00.0\nW-|05328|00:21:27.0|02:00.8|000.0|00.0|107.5|125.0|00.0\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|125.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|05328|21:27.0|02:00.8|000.0|00.0|107.5|125.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156037,
                "name": "Enschede / Enschede, De Grolsch Veste",
                "date": "2021-12-31",
                "workouttype": "bike",
                "starttime": "13:16:22",
                "distance": 5279,
                "duration": "00:18:58",
                "averagehr": 117,
                "maxhr": 130,
                "notes": "",
                "summary": "Workout Summary - media/b2af4a4c72-20211231-143649.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|05279|00:18:58.0|01:47.8|000.0|0.0|117.6|130.0|00.0\nW-|05279|00:18:58.0|01:47.8|000.0|00.0|117.6|130.0|00.0\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|130.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|05279|18:58.0|01:47.8|000.0|00.0|117.6|130.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 155787,
                "name": "Borne / Mander, Dal Van De Mosbeek",
                "date": "2021-12-30",
                "workouttype": "bike",
                "starttime": "13:09:42",
                "distance": 59420,
                "duration": "03:10:07",
                "averagehr": 151,
                "maxhr": 175,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/e21bb5965e-20211230-185843.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|59420|03:10:07.0|01:36.0|000.0|0.0|152.0|175.0|00.0\nW-|59421|03:10:07.0|01:36.0|000.0|00.0|152.0|175.0|00.0\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|175.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|59421|10:07.0|01:36.0|000.0|00.0|152.0|175.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156107,
                "name": "Afternoon Ride",
                "date": "2021-12-28",
                "workouttype": "other",
                "starttime": "15:18:39",
                "distance": 28310,
                "duration": "01:01:20",
                "averagehr": 0,
                "maxhr": 0,
                "notes": "from csv via rowsandall.com",
                "summary": "Workout Summary - media/c6f309bdf3-20220101-143402.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|28310|01:01:20.0|01:05.0|230.6|0.0|000.0|000.0|00.0\nW-|28310|01:01:20.0|01:05.0|230.6|00.0|000.0|000.0|00.0\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|000.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|28310|01:20.0|01:05.0|230.6|00.0|000.0|0.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Brussels",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 156108,
                "name": "Bad Bentheim",
                "date": "2021-12-26",
                "workouttype": "Walk",
                "starttime": "13:58:47",
                "distance": 1621,
                "duration": "00:27:57",
                "averagehr": 77,
                "maxhr": 109,
                "notes": "",
                "summary": "Workout Summary - media/f6aaae05ec-20220101-143413.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|01621|00:27:57.0|08:37.3|000.0|40.8|077.1|109.0|01.4\nW-|01622|00:27:57.0|08:37.1|000.0|40.8|077.1|109.0|01.4\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|109.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01622|27:57.0|08:37.1|000.0|40.8|077.1|109.0|01.4\n",
                "boattype": "1x",
                "timezone": "Europe/Berlin",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 155117,
                "name": "Afternoon hike",
                "date": "2021-12-26",
                "workouttype": "Walk",
                "starttime": "13:58:47",
                "distance": 1616,
                "duration": "00:27:17",
                "averagehr": 77,
                "maxhr": 109,
                "notes": "from fitvNone via rowsandall.com",
                "summary": "Workout Summary - media/f7eb12f2ed-20211226-143319o.csv\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|01616|00:27:17.0|08:26.5|000.0|41.0|077.4|109.0|01.4\nW-|01617|00:27:17.0|08:26.3|000.0|41.0|077.4|109.0|01.4\nR-|00000|00:00:00.0|00:00.0|000.0|00.0|000.0|109.0|00.0\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|01617|27:17.0|08:26.3|000.0|41.0|077.4|109.0|01.4\n",
                "boattype": "1x",
                "timezone": "Europe/Berlin",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 155089,
                "name": "Morning rower",
                "date": "2021-12-26",
                "workouttype": "rower",
                "starttime": "09:49:53",
                "distance": 12367,
                "duration": "00:52:07.500000",
                "averagehr": 158,
                "maxhr": 169,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/Import_59721786.csv.gz\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|12000|00:49:07.6|02:02.8|188.9|22.0|168.0|000.0|10.5\nW-|12000|00:49:07.6|02:02.8|188.9|22.0|168.0|000.0|10.5\nR-|00367|00:03:00.0|04:05.2|023.7|00.0|000.0|000.0|00.0\n\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|04000|16:22.9|02:02.9|188.7|22.0|000.0|0.0|00.0\n01|04000|16:21.3|02:02.7|189.6|22.0|000.0|0.0|00.0\n02|04000|16:23.5|02:02.9|188.4|23.0|000.0|0.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            },
            {
                "id": 155044,
                "name": "Morning rower",
                "date": "2021-12-25",
                "workouttype": "rower",
                "starttime": "10:03:14",
                "distance": 16503,
                "duration": "01:09:45.600000",
                "averagehr": 163,
                "maxhr": 171,
                "notes": "\n from csv via rowsandall.com",
                "summary": "Workout Summary - media/Import_59705487.csv.gz\n--|Total|-Total----|--Avg--|-Avg-|Avg-|-Avg-|-Max-|-Avg\n--|Dist-|-Time-----|-Pace--|-Pwr-|SPM-|-HR--|-HR--|-DPS\n--|16000|01:05:45.6|02:03.3|186.7|22.0|169.0|000.0|10.5\nW-|16000|01:05:45.6|02:03.3|186.7|22.0|169.0|000.0|10.5\nR-|00503|00:04:00.0|03:58.6|025.8|00.0|000.0|000.0|00.0\n\nWorkout Details\n#-|SDist|-Split-|-SPace-|-Pwr-|SPM-|AvgHR|MaxHR|DPS-\n00|04000|16:26.8|02:03.4|186.5|22.0|000.0|0.0|00.0\n01|04000|16:24.4|02:03.1|187.9|22.0|000.0|0.0|00.0\n02|04000|16:17.8|02:02.2|191.7|22.0|000.0|0.0|00.0\n03|04000|16:36.6|02:04.6|181.0|22.0|000.0|0.0|00.0\n",
                "boattype": "1x",
                "timezone": "Europe/Amsterdam",
                "forceunit": "N",
                "inboard": 0.88,
                "oarlength": 2.89,
                "privacy": "visible",
                "rankingpiece": false
            }
        ]
    }
}

const workoutReducer = (state = initialState) => {
    return state
}

export default workoutReducer
