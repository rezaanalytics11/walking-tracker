const supabaseUrl =
"https://fazwcbgczmqrtaergpcc.supabase.co"

const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhendjYmdjem1xcnRhZXJncGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMjA2MzMsImV4cCI6MjA5NzY5NjYzM30.ndlVaXtFcKEoFY0JXx2gZWm1iM9T-XbSXgCfG4YMwd0"

const client =
supabase.createClient(
supabaseUrl,
supabaseKey
)

async function saveWalk(){

const date =
document.getElementById("date").value

const hours =
parseFloat(document.getElementById("hours").value)

await client
.from("walking")
.insert({

date:date,

hours:hours

})

loadChart()

}

async function loadChart(){

const {data,error} =
await client

.from("walking")

.select("*")

.order("date")

const labels =
data.map(x=>x.date)

const values =
data.map(x=>x.hours)

new Chart(

document.getElementById("myChart"),

{

type:"line",

data:{

labels:labels,

datasets:[{

label:"ساعت پیاده روی",

data:values

}]

}

})

}

loadChart()
