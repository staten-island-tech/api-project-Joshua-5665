/* const sushiOrders = [
  { name: "California Roll", price: 8 },
  { name: "Spicy Tuna Roll", price: 10 },
  { name: "Salmon Nigiri", price: 6 },
  { name: "California Roll", price: 8 },
  { name: "Dragon Roll", price: 12 },
  { name: "Spicy Tuna Roll", price: 10 },
  { name: "Miso Soup", price: 4 },
  { name: "Edamame", price: 5 },
  { name: "Salmon Nigiri", price: 6 },
  { name: "California Roll", price: 8 },
];

function getReceipt(sushiOrders) {
    let receipt = {};
    sushiOrders.forEach((item) => {
        if(!receipt[item.name]) {
            receipt[item.name] = {
                price: item.price,
                qty: 1,
            };
        } else {
            receipt[item.name].qty++;
        }
    }) 
    console.log(receipt);
}
getReceipt(sushiOrders);

function generateReceipt(orders) {
    const itemMap = {}

    orders.forEach((order) => {
        if(itemMap[order.name]) {
            itemMap[order.name].qty += 1;
        } else {
            itemMap[order.name] = {qty: 1, price: order.price};
        }
    })
    let total = 0;
    let receipt = "";

    for (const [name, {qty, price }] of Object.entries(itemMap)) {
        console.log(name, qty, price);

        total += qty * price;
        receipt += `${name} x${qty} $${price*qty}\n`
    }
    receipt += `TOTAL ${total}`
    console.log(receipt);
}
generateReceipt(sushiOrders); */

const department = {
    Cardiology: ["Alice", "Bob", "Carol"],
    Neurology: ["Diana", "Eve"],
    Orthopedics: ["Frank", "Grace", "Hank"],
    Oncology: ["Ivy", "Bob"]
};

const staff = {};
Object.entries(department).forEach(([dept, doctors]) => {
    console.log(dept, doctors);
    if(!staff[doctors]) {
        staff[doctors] = [dept];
    } else {
        staff[doctors].push(dept);
    }
    console.log(staff);
})

