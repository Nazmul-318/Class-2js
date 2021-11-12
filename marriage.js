
let gender = prompt(`Write Your Gender`);
let name = prompt(`Write Your Name`);
let age = prompt(`Write Your Age`);


if (gender == 'male')
{
    console.log(`Name : ${name} Age : ${age}`);

    if ( age >= 21 )
    {
        console.log(`You have reached the age of marriage.`);
    }
    else
    {
        console.log(`Be careful you are not enough old to get married yet.Please wait ${21-age} years.`);
    }
}
else if (gender == 'female')
{
    console.log(`Name : ${name} Age : ${age}`);

    if ( age >= 18 )
    {
        console.log(`You have reached the age of marriage.`);
    }
    else
    {
        console.log(`Be careful you are not enough old to get married yet.Please wait ${18-age} years.`);
    }
}
else{
    console.log(`Gender not specified`);
}

    