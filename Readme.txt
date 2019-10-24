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
in each times(it is printed to the terminal every 10 seconds).
for interpreting the result we can use docs that mentioned:
Scenarios :  launched is the number of virtual users created in the preceding 10 seconds (or in total)
Scenarios :  completed is the number of virtual users that completed their scenarios in the preceding 10 seconds (or in the whole test). Note: this is the number of completed sessions, not the number of sessions started and completed in a 10 second interval.
Requests  :  completed is the number of HTTP requests and responses or WebSocket messages sent
RPS       :  sent is the average number of requests per second completed in the preceding 10 seconds (or throughout the test)
Request   :  latency is in milliseconds, and p95 and p99 values are the 95th and 99th percentile values (a request latency p99 value of 500ms means that 99 out of 100 requests took 500ms or less to complete).
Codes     :  provides the breakdown of HTTP response codes received.
If you see NaN ("not a number") reported as a value, that means not enough responses have been received to calculate the percentile.

If there are any errors (such as socket timeouts), those will be printed under Errors in the report as well.

script tests:
1- I want to repeat my second quick test in script format with other paramiters(see third-test.yml):
it is runnig with this command "artillery run third-test.yml"
res:
Started phase 0, duration: 30s @ 19:21:40(+0330) 2019-10-24
Report @ 19:21:50(+0330) 2019-10-24
Elapsed time: 10 seconds
  Scenarios launched:  199
  Scenarios completed: 184
  Requests completed:  184
  RPS sent: 20.22
  Request latency:
    min: 736
    max: 953.1
    median: 757.5
    p95: 914.3
    p99: 932.6
  Codes:
    200: 184

Report @ 19:22:00(+0330) 2019-10-24
Elapsed time: 20 seconds
  Scenarios launched:  200
  Scenarios completed: 199
  Requests completed:  199
  RPS sent: 20.06
  Request latency:
    min: 731.9
    max: 930.6
    median: 757.3
    p95: 898.1
    p99: 922.4
  Codes:
    200: 199

Report @ 19:22:10(+0330) 2019-10-24
Elapsed time: 30 seconds
  Scenarios launched:  200
  Scenarios completed: 200
  Requests completed:  200
  RPS sent: 20.2
  Request latency:
    min: 744.4
    max: 958.2
    median: 774.4
    p95: 923.5
    p99: 956.1
  Codes:
    200: 200

Report @ 19:22:11(+0330) 2019-10-24
Elapsed time: 31 seconds
  Scenarios launched:  1
  Scenarios completed: 17
  Requests completed:  17
  RPS sent: 1
  Request latency:
    min: 765.5
    max: 976.2
    median: 814.7
    p95: 934.7
    p99: 976.2
  Codes:
    200: 17

All virtual users finished
Summary report @ 19:22:11(+0330) 2019-10-24
  Scenarios launched:  600
  Scenarios completed: 600
  Requests completed:  600
  RPS sent: 19.4
  Request latency:
    min: 731.9
    max: 976.2
    median: 763.8
    p95: 913.9
    p99: 935.3
  Scenario counts:
    0: 600 (100%)
  Codes:
    200: 600

In this test we set test duration 30 sec and our arrivalRate is 20.our 600 tests is complited
successfully with this paramiters.
----------------------------------------------------------------------------------------------------------------------
Basic about our package that we used:
as you can see on package.json we used:
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "point-in-polygon": "^1.0.1",
express for writing apis.
body-parser for parsing body in put api
point-in-polygon that help us finding if a point is in an area or not

also we use (with global installation):
artillery
nodemon
heroku

-----------------------------------------------------------------------------------------------------------------------
considration:
we supposed that input arguments are correct and their format is exactly like what homework says (because it dosen't mention
input checking )
