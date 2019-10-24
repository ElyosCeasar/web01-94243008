Introduction
This application is an GeoApplication base on a homework(https://github.com/sehsanm/sbu-ieng-98).
we should impliment 2 restful apis .one of them gets 2 arguments as (lat, long) and determind if 
this point is on poliguns that is some selected area on erth map .if so it writes all of the area
names.(get: /gis/testpoint/:lat/:long)
At first we load 2 poliguns from  sample-data.json that homework mentioned. then with a put methoud
we can add more areas to memory.it gets json argument in body and retrive whole areas as answer
 (put: /gis/addpolygon). 
Then we must publish it in heroku.(https://web01-94243008.herokuapp.com).
At the end we suposed to test or application with artillery.
----------------------------------------------------------------------------------------------------------------------------
Load Test
As docs mention (https://artillery.io/docs/getting-started/) we prepared some tests :
quick tests:
1-artillery quick --count 10 -n 20 https://web01-94243008.herokuapp.com (it is a get that
returns hello world for connection testing)
result:
Started phase 0, duration: 1s @ 18:37:38(+0330) 2019-10-24
Report @ 18:37:44(+0330) 2019-10-24
Elapsed time: 6 seconds
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 34.19
  Request latency:
    min: 177.3
    max: 988.9
    median: 191
    p95: 492.4
    p99: 919.8
  Codes:
    200: 200

All virtual users finished
Summary report @ 18:37:44(+0330) 2019-10-24
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 34.01
  Request latency:
    min: 177.3
    max: 988.9
    median: 191
    p95: 492.4
    p99: 919.8
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 200

That means we have 10 "virtual users" each of which will send 20 HTTP GET requests to 
our url.
As you see all scenarios are complited successfully we have 10 user and they request 20
times so we have 200 request(Requests completed:  200)
then we can see our latancy ( min: 177.3    max: 988.9    median: 191)

2-artillery quick --count 200 -n 100 https://web01-94243008.herokuapp.com/gis/testpoint/52.20703125/34.41144164327245  
Started phase 0, duration: 4s @ 18:49:00(+0330) 2019-10-24
Report @ 18:49:10(+0330) 2019-10-24
Elapsed time: 10 seconds
  Scenarios launched:  200
  Scenarios completed: 0
  Requests completed:  1609
  RPS sent: 182.73
  Request latency:
    min: 228
    max: 7337.6
    median: 413.8
    p95: 2528.7
    p99: 4899.5
  Codes:
    200: 1609

Report @ 18:49:20(+0330) 2019-10-24
Elapsed time: 20 seconds
  Scenarios launched:  0
  Scenarios completed: 0
  Requests completed:  2800        
  RPS sent: 281.97
  Request latency:
    min: 243.4
    max: 16275.4
    median: 364.8
    p95: 2025
    p99: 5580.5
  Codes:
    200: 2800

Report @ 18:49:30(+0330) 2019-10-24
Elapsed time: 30 seconds
  Scenarios launched:  0
  Scenarios completed: 0
  Requests completed:  2764
  RPS sent: 280.04
  Request latency:
    min: 255.1
    max: 24282.4
    median: 338.3
    p95: 1868.1
    p99: 4350.1
  Codes:
    200: 2764

Report @ 18:49:40(+0330) 2019-10-24
Elapsed time: 40 seconds
  Scenarios launched:  0
  Scenarios completed: 0
  Requests completed:  2724
  RPS sent: 276.55
  Request latency:
    min: 250.6
    max: 28357.8
    median: 348.1
    p95: 1933.1
    p99: 6116.8
  Codes:
    200: 2724

Report @ 18:49:50(+0330) 2019-10-24
Elapsed time: 50 seconds
  Scenarios launched:  0
  Scenarios completed: 4
  Requests completed:  2743
  RPS sent: 274.45
  Request latency:
    min: 251.8
    max: 38400.5
    median: 327.1
    p95: 1895.4
    p99: 5183.4
  Codes:
    200: 2743
  Errors:
    ECONNRESET: 1

Report @ 18:50:00(+0330) 2019-10-24
Elapsed time: 1 minute, 0 seconds
  Scenarios launched:  0
  Scenarios completed: 39
  Requests completed:  2764
  RPS sent: 273.32
  Request latency:
    min: 257.6
    max: 37954
    median: 320.9
    p95: 1718.1
    p99: 5412.1
  Codes:
    200: 2764

Warning: 
CPU usage of Artillery seems to be very high (pids: 23052)
which may severely affect its performance.
See https://artillery.io/docs/faq/#high-cpu-warnings for details.

Report @ 18:50:10(+0330) 2019-10-24
Elapsed time: 1 minute, 10 seconds
  Scenarios launched:  0
  Scenarios completed: 89
  Requests completed:  2819
  RPS sent: 273.55
  Request latency:
    min: 189.4
    max: 39512.5
    median: 309.7
    p95: 786.7
    p99: 3379.9
  Codes:
    200: 2819

Report @ 18:50:20(+0330) 2019-10-24
Elapsed time: 1 minute, 20 seconds
  Scenarios launched:  0
  Scenarios completed: 56
  Requests completed:  1314
  RPS sent: 126.31
  Request latency:
    min: 183.7
    max: 51755.5
    median: 199.3
    p95: 258.5
    p99: 421.5
  Codes:
    200: 1314
  Errors:
    ECONNRESET: 1

Report @ 18:50:30(+0330) 2019-10-24
Elapsed time: 1 minute, 30 seconds
  Scenarios launched:  0
  Scenarios completed: 7
  Requests completed:  219
  RPS sent: 21.72
  Request latency:
    min: 183.2
    max: 581.7
    median: 197.7
    p95: 235.7
    p99: 411.8
  Codes:
    200: 219
  Errors:
    ECONNRESET: 1

Report @ 18:50:40(+0330) 2019-10-24
Elapsed time: 1 minute, 40 seconds
  Scenarios launched:  0
  Scenarios completed: 1
  Requests completed:  79
  RPS sent: 7.83
  Request latency:
    min: 197.9
    max: 253.4
    median: 224.8
    p95: 235.7
    p99: 251
  Codes:
    200: 79

Report @ 18:50:42(+0330) 2019-10-24
Elapsed time: 1 minute, 41 seconds
  Scenarios launched:  0
  Scenarios completed: 1
  Requests completed:  4
  RPS sent: 2.86
  Request latency:
    min: 226.9
    max: 231.7
    median: 229.3
    p95: 231.7
    p99: 231.7
  Codes:
    200: 4

All virtual users finished
Summary report @ 18:50:42(+0330) 2019-10-24
  Scenarios launched:  200
  Scenarios completed: 197
  Requests completed:  19839
  Scenarios launched:  0
  RPS sent: 196.11
  Request latency:
    min: 183.2
    max: 51755.5
    median: 331.3
    p95: 1764.9
    p99: 5146.6
  Scenario counts:
    0: 200 (100%)
  Codes:
    200: 19839
  Errors:
    ECONNRESET: 3

In this test we test other get api that is mentiond in homework with 200 user who requstes 100 times.you can see results
in each times.
