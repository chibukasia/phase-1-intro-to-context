// Your code here
function createEmployeeRecord(empArray){
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title :empArray[2],
        payPerHour:empArray[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}
function createEmployeeRecords(empArrRecord){
   empArrRecord.map(function(eachArrar){
       createEmployeeRecord(eachArrar)
   })
}

function createTimeInEvent(empObjRec, dateStamp){
    let [date, hour]=dateStamp.split(" ");
    const empTimeIn = {
        type:'TimeIn',
        hour: hour,
        date:date
    }
    return empObjRec.timeInEvents.push(empTimeIn)
}

function createTimeOutEvent(empObjRec, dateStamp){
    let [date, hour]=dateStamp.split(" ");
    const empTimeOut = {
        type:'TimeOut',
        hour: hour,
        date:date
    }
    return empObjRec.timeOutEvents.push(empTimeOut)
}

function hoursWorkedOnDate(empObjRec,dataInMDY){
    const hoursWorked = empObjRec.timeOutEvents - empObjRec.timeInEvents
    return hoursWorkedInt.parseInt(hoursWorked, 10)
}