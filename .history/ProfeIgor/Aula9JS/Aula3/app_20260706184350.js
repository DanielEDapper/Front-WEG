let industrialMachines = ["Torno CNC", null, "Braço Robótico"];
// console.log(industrialMachines);

industrialMachines[1] = "Prensa Hidráulica";
// console.log(industrialMachines[1]);

const factoryInfo =  `Até aqui, o inventário
"industrialMachines" possui ${industrialMachines.length} ativos: ${industrialMachines[0]},
${industrialMachines[1]} e ${industrialMachines[2]}.`

// console.log(factoryInfo);

const digitalSensors = ["Sensor Laser", "Sensor Indutivo"];
const analogSensors = ["Sensor Térmico", "Sensor de Pressão"];
let allSensors = digitalSensors.join(analogSensors);

// console.log(allSensors);

allSensors = digitalSensors.concat(analogSensors);
// console.log(allSensors);

allSensors.pop();
// console.log(allSensors[allSensors.length -1]);

allSensors.push("Inversor");
const sensorInitials = `${},${}`;