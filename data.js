let guides=[];

let categories=["surveys","rewardapps","tasks","offers","beginners"];

for(let i=1;i<=200;i++){

let cat=categories[i%5];

guides.push({

id:i,

title:"Reward Platform Guide "+i,

summary:"Learn about reward platforms, survey systems, and online participation programs.",

content:

"Guide "+i+" explains how digital reward platforms operate. Many services provide points for activities such as surveys, testing apps, completing offers, or participating in feedback programs. Users typically collect reward points which may later be exchanged depending on the platform rules. Understanding eligibility requirements, reward systems, and platform policies helps users navigate these programs responsibly. Always review platform policies, privacy terms, and reward conditions before participating."

});

}
