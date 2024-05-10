interface Environment {
    isGovCloud?: boolean
}

let government: Environment =
{
    isGovCloud: true
}

let commercial: Environment =
{
    isGovCloud: false,
}

let undeclared: Environment =
{
    // isGovCloud: false
}

console.log("government: " + (government.isGovCloud ? "yes" : "no"))
console.log("commercial: " + (commercial.isGovCloud ? "yes" : "no"))
console.log("undeclared: " + (undeclared.isGovCloud ? "yes" : "no"))
