function show() {
    sum()
    console.log("hey")
}

function alertFunction() {
    alert(
        "I am Navya"
    )
}

function sum() {
    var a = 1
    var b = 2
    var c = a + b
    console.log(c)

    //use let to declare unique variables
}

function display() {
    var text = document.getElementById("ip").value
    console.log(text)

    document.getElementById("display-heading").innerHTML = text

    if (text == "Sarah") {
        alert("Hey! U rock!")
    }
}

function arrays() {
    var arr = ["apple", "banana", 1]
    console.log(arr)
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])

}

function obj() {
    var emp = {
        Name: "Navya",
        Age: 19,
        Occupation: "Student"
    }

    console.log(emp)
    console.log(emp.Name)
    console.log(emp.Age)
    console.log(emp.Occupation)

}

function multObj() {
    var emps = [
        {
            Name: "Navya",
            Age: 19,
            Occupation: "Student"
        },
        {
            Name: "Edna",
            Age: 20,
            Occupation: "Manager"
        },
        {
            Name: "Cerin",
            Age: 23,
            Occupation: "Officer"
        }
    ]
    console.log(emps)

    console.log(emps[0].Name)
    console.log(emps[0].Age)
    console.log(emps[0].Occupation)

    console.log(emps[1].Name)
    console.log(emps[1].Age)
    console.log(emps[1].Occupation)

    console.log(emps[2].Name)
    console.log(emps[2].Age)
    console.log(emps[2].Occupation)
}