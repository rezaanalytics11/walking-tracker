const supabaseUrl =
"https://fazwcbgczmqrtaergpcc.supabase.co"

const supabaseKey =
"YOUR_ANON_KEY"

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
