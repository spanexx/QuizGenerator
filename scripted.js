
const resultElement = document.getElementById("result");


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

Certainly! Here is the corrected code with proper formatting, including the missing comma in the last entry:


const originalQuizMap = new Map([
    ["What is the primary chemical reaction that occurs during the discharge of a lead-acid battery?", "Reduction of lead sulfate"],
    ["What distinguishes Sealed Lead-Acid (SLA) batteries from traditional lead-acid batteries?", "They are maintenance-free"],
    ["What is the key advantage of lithium-ion batteries over other types of batteries?", "Higher energy density"],
    ["What is the main function of the commutator in a DC machine?", "To reverse the current direction"],
    ["In a DC motor, what happens when the armature rotates in the magnetic field?", "Torque is produced causing rotation"],
    ["What is the main principle behind the operation of a three-phase induction motor?", "Electromagnetic induction"],
    ["What is a common application of single-phase motors?", "Residential ceiling fans"],
    ["Why is it important to connect electrical equipment to the grounding system?", "To prevent leakage current"],
    ["What is the purpose of an earth fault current in an electrical system?", "To detect faulty insulation"],
    ["What is the primary function of an ammeter?", "Measure current"],
    ["Differentiate between direct and indirect methods of connecting measuring instruments.", "Direct methods measure directly, while indirect methods involve calculations based on other measurements."],
    ["What does range extension refer to in measuring instruments?", "Expanding the range of measurable values"],
    ["What is a significant advantage of digital measuring instruments over analog ones?", "Digital instruments provide faster and more accurate readings"],
    ["Lead-acid batteries: What is the typical electrolyte used?", "Sulfuric acid"],
    ["Sealed lead-acid (SLA) batteries: What is the purpose of the safety valve?", "Prevent overcharging"],
    ["Lithium-ion batteries: What is the cathode material commonly used?", "Lithium cobalt oxide"],
    ["Function and construction of DC machines: What is the role of the armature?", "Convert mechanical energy to electrical energy"],
    ["DC motors: What is the purpose of the commutator?", "Reverse current direction"],
    ["DC generators: In a DC generator, what is the function of the brushes?", "Maintain electrical contact"],
    ["Three-phase induction motors: What is the advantage of a three-phase induction motor over a single-phase motor?", "Higher efficiency"],
    ["Single-phase motors: What is the primary drawback of single-phase motors compared to three-phase motors?", "Limited applications"],
    ["Leakage current and the earthing chain: How does earthing help in limiting leakage current?", "Provide a low-resistance path to ground"],
    ["Earth fault current: What is the consequence of a high earth fault current in an electrical system?", "Risk of electrical fires"],
    ["Function of measuring instruments: What is the basic principle behind the operation of a voltmeter?", "Measures voltage"],
    ["Direct and indirect methods of connecting measuring instruments: Provide an example of a direct method of connecting a measuring instrument.", "Ammeter in series"],
    ["Range extension of measuring instruments: How is the range of a multimeter extended for measuring higher voltages?", "By connecting a resistor in series"],
    ["Digital measuring instruments: What is a significant disadvantage of digital measuring instruments?", "Slower response time"],
    ["Lead-acid batteries: What are the environmental concerns associated with lead-acid batteries?", "Lead is a toxic heavy metal, and improper disposal can pose environmental hazards."],
    ["Sealed lead-acid (SLA) batteries: How do AGM batteries differ from gel batteries?", "AGM uses a glass mat separator, while gel batteries use a gelled electrolyte, both being valve-regulated."],
    ["Lithium-ion batteries: What are some of the emerging applications of lithium-ion battery technology?", "Electric vehicles, grid energy storage, and power tools due to high energy density and long lifespan."],
    ["Factors influencing the capacity of lead-acid batteries:", "Quantity of active materials, Temperature, Number of plates, Size of plates (surface area), Rate of discharge"],
    ["How can you test a lead-acid battery through an open-circuit voltage test?", "Disconnect one terminal, Connect voltmeter, Good battery: ≥ 12.6 V, Faulty battery: < 12 V"],
    ["What is a load test for lead-acid batteries, and how is it conducted?", "Connect discharge tester, Adjust current to 3 times ampere-hour rating, Do not exceed 15 seconds, Good battery: ≥ 9.6 V, Faulty battery: < 9.6 V, Observe cell activity for weakening"],
    ["Explain the structure of Sealed Lead-Acid (SLA) batteries.", "Rechargeable, Sealed construction, Valve-regulated (VRLA), Key components: Plates, Electrolyte, Separators, Case, Pressure relief valve"],
    ["Describe the discharge process in Sealed Lead-Acid (SLA) batteries.", "Chemical reaction between lead plates and sulfuric acid, Lead sulfate forms on plates, Generates electricity"],
    ["How does the charging process work in Sealed Lead-Acid (SLA) batteries?", "External voltage reverses the reaction, Regenerates lead and lead dioxide on plates, Recombines oxygen and hydrogen internally"],
    ["List three common uses of Sealed Lead-Acid (SLA) batteries.", "Uninterruptible Power Supplies (UPS), Emergency Lighting Systems, Medical Equipment"],
    ["What are the advantages of Sealed Lead-Acid (SLA) batteries over traditional lead-acid batteries?", "Maintenance-Free, Leak-Proof, Spill-Proof, Lower Self-Discharge Rate, Versatile"],
    ["In lead-acid batteries, why is the quantity of active materials a factor influencing capacity?", "It determines the amount of material available for the chemical reactions that produce electrical energy."],
    ["Why is the open-circuit voltage test performed on lead-acid batteries, and what does a low reading indicate?", "To check the battery's health, Low reading (< 12 V) indicates a faulty battery."],
    ["What is the purpose of a valve in valve-regulated lead-acid (VRLA) batteries?", "To control the flow of gases and recombine hydrogen with oxygen."],
    ["Explain the construction of VRLA cells and their resistance to vibration.", "Electrolyte is immobilized, surrounded by lead plates, and resistant to vibration."],
    ["What are the two main types of VRLA batteries mentioned in the text?", "Absorbent glass mat (AGM) batteries and Gel batteries."],
    ["How does the construction of AGM batteries differ from Gel batteries?", "AGM uses a glass mat separator, while Gel batteries have electrolyte immobilized in a gel."],
    ["List three applications of VRLA batteries.", "Uninterruptible power supplies (UPS), Motorcycle batteries, Scooter batteries."],
    ["What are the advantages of VRLA batteries listed in the text?", "Maintenance-free, Spill-proof, Leak-proof, Mountable in any position, Long lifespan, Deep discharge recovery, High rate discharge capability."],
    ["What are the disadvantages of VRLA batteries mentioned?", "Higher initial cost than flooded lead-acid batteries, Not as tolerant of high temperatures as flooded lead-acid batteries."],
    ["What are the advantages of Absorbent Glass Mat (AGM) batteries?", "Long lifespan, Vibration resistant, Handles high electrical demand, Greater mounting flexibility, No spillage of electrolyte, Reasonably maintenance-free, Charges quickly, Can handle harsh climates and demanding conditions."],
    ["What are the listed disadvantages of AGM batteries?", "Expensive, Reduced capacity over time, Sensitive to overcharging."],
    ["What are the safety precautions mentioned for handling lead-acid batteries?", "Wear eye and acid-resistant gloves, Work in a well-ventilated area, Avoid smoking or eating near batteries, Do not touch terminals with bare hands, Avoid dropping batteries, Wash immediately if in contact with battery acid, Dispose of batteries properly."],
    ["Describe the construction of a flooded lead-acid battery.", "Positive and negative plates immersed in a liquid electrolyte solution (sulfuric acid and water), Positive plates made of lead dioxide, Negative plates made of lead."],
    ["What happens to hydrogen gas produced during discharge in a flooded lead-acid battery?", "In a flooded lead-acid battery, hydrogen gas escapes into the atmosphere."],
    ["How does a sealed lead-acid (SLA) battery differ in handling hydrogen gas compared to a flooded lead-acid battery?", "In an SLA battery, hydrogen gas recombines with oxygen from the plates to form water, eliminating the need for watering."],
    ["What are the steps listed for fault finding on lead-acid batteries?", "Check electrolyte level, Clean battery terminals, Load test the battery, Check for loose or damaged connections."],
    ["What is the purpose of cleaning battery terminals during maintenance?", "To remove corrosion that may prevent the battery from starting."],
    ["How is the electrolyte level maintained in lead-acid batteries?", "Add distilled water if the electrolyte level is low."],
    ["What is the purpose of load testing a lead-acid battery?", "To check the health of the battery by measuring voltage under load."],
    ["Why is it important to dispose of lead-acid batteries properly?", "Lead-acid batteries contain hazardous substances, and proper disposal is necessary for environmental safety."], // Added a comma here
    ["What is the main function of DC machines?", "DC machines convert mechanical energy into electrical energy or vice versa."],
    ["Explain the construction of DC machines.", "DC machines consist of a stator, rotor, commutator, and brushes. The stator produces a magnetic field, the rotor has conductors carrying current, the commutator reverses the current direction, and brushes maintain electrical contact."],
    ["What is the purpose of the commutator in a DC machine?", "The commutator reverses the current direction in the rotor windings, ensuring continuous rotation in DC motors and the generation of direct current in DC generators."],
    ["Differentiate between DC motors and DC generators.", "DC motors convert electrical energy into mechanical energy, producing rotation. DC generators convert mechanical energy into electrical energy by generating direct current."],
    ["How does a DC motor operate?", "When electric current passes through the rotor windings in a magnetic field, a torque is produced, causing the rotor to rotate and mechanical work to be done."],
    ["What is the principle behind the operation of DC generators?", "DC generators operate on the principle of electromagnetic induction, where a moving conductor (rotor) cuts through magnetic lines of flux, inducing a voltage and generating direct current."],
    ["In DC generators, what is the role of the brushes?", "The brushes maintain electrical contact with the rotating commutator, allowing the generated current to be collected and transferred to external circuits."],
    ["Explain the function of the stator in DC machines.", "The stator provides a stationary magnetic field that interacts with the rotor's magnetic field, inducing the generation of electric current in DC generators or producing torque in DC motors."],
    ["What happens when the armature rotates in the magnetic field of a DC motor?", "Rotation of the armature in the magnetic field generates torque, causing the motor to turn."],
    ["How does a DC motor reverse its direction of rotation?", "The direction of rotation in a DC motor can be reversed by reversing the polarity of either the field winding or the armature winding."],
    ["What factors influence the speed of a DC motor?", "The speed of a DC motor is influenced by the applied voltage, the strength of the magnetic field, and the mechanical load."],
    ["Why is the commutator necessary in DC motors?", "The commutator ensures that the current direction in the rotor windings is reversed at the appropriate time, allowing for continuous rotation in the same direction."],
    ["What is the role of brushes in DC motors?", "Brushes maintain electrical contact with the commutator, allowing the current to flow through the rotor windings and producing rotation."],
    ["How is the speed of a DC motor controlled?", "The speed of a DC motor can be controlled by varying the applied voltage, adjusting the field winding current, or using external resistors in series with the armature."],
    ["What are the key components of a DC motor?", "Key components include the stator, rotor, commutator, brushes, and sometimes a field winding."],
    ["What is the difference between a separately excited DC motor and a self-excited DC motor?", "In a separately excited DC motor, the field winding is supplied from an external source. In a self-excited DC motor, the field winding is connected to the same source as the armature winding."],
    ["How does a DC shunt motor differ from a DC series motor?", "In a DC shunt motor, the field winding is connected in parallel (shunt) with the armature winding. In a DC series motor, the field winding is connected in series with the armature winding."],
    ["Explain the construction and working principle of a DC compound motor.", "A DC compound motor combines the features of both series and shunt motors. It has both series and shunt field windings, providing a compromise between high starting torque and constant speed."],
    ["What are the advantages of DC motors?", "Advantages include simplicity, ease of speed control, and the ability to provide high starting torque."],
    ["What are the disadvantages of DC motors?", "Disadvantages include the need for regular maintenance of brushes and commutators, limited speed control range, and potential for sparking at the commutator."],
    ["How does a DC generator produce direct current?", "A DC generator produces direct current by utilizing a commutator to reverse the direction of the generated current in the armature windings, resulting in a unidirectional output."],
    ["What is the role of the armature in a DC generator?", "The armature in a DC generator consists of conductors that cut through magnetic lines of flux, inducing a voltage as the armature rotates, leading to the generation of direct current."],
    ["What are the types of DC generators based on their field winding connections?", "DC generators can be classified as shunt-wound, series-wound, or compound-wound based on the connection of their field windings."],
    ["Explain the working principle of a shunt-wound DC generator.", "In a shunt-wound DC generator, the field winding is connected in parallel (shunt) with the armature winding. It produces a nearly constant voltage under varying loads due to the independence of the field circuit."],
    ["How does a series-wound DC generator differ from a shunt-wound generator?", "In a series-wound DC generator, the field winding is connected in series with the armature winding. It provides a high output current under varying loads but may have a less stable voltage."],
    ["What is the construction and purpose of a commutator in DC generators?", "The commutator in DC generators is a rotary switch that reverses the direction of current in the armature windings, ensuring a unidirectional output of direct current."],
    ["What are the applications of DC generators?", "DC generators find applications in battery charging, electroplating, traction, and other situations where a stable direct current source is required."],
    ["What are the advantages of DC generators?", "Advantages include simplicity, ease of maintenance, and the ability to provide a stable and direct current output."],
    ["What are the disadvantages of DC generators?", "Disadvantages include the need for regular maintenance of brushes and commutators, limited scalability, and the presence of sparking at the commutator."],
    ["What is the principle behind the operation of three-phase induction motors?", "Three-phase induction motors operate on the principle of electromagnetic induction, where a rotating magnetic field in the stator induces current flow in the rotor, producing torque and motor rotation."],
    ["How does the speed of a three-phase induction motor compare to the speed of the rotating magnetic field?", "The speed of a three-phase induction motor is slightly less than the speed of the rotating magnetic field, resulting in slip, which is necessary for the production of torque."],
    ["Explain the construction of a three-phase induction motor.", "A three-phase induction motor consists of a stator with three sets of windings, a rotor with conductors, and end rings. The stator produces a rotating magnetic field, inducing current flow in the rotor and causing motor rotation."],
    ["What is the purpose of the squirrel-cage rotor in a three-phase induction motor?", "The squirrel-cage rotor consists of conductors forming a shorted loop, creating a closed circuit that allows induced current to flow, producing torque and motor rotation."],
    ["Differentiate between a synchronous speed and an asynchronous speed in three-phase induction motors.", "Synchronous speed is the speed of the rotating magnetic field, while asynchronous speed is the speed of the rotor, which is slightly less than synchronous speed due to slip."],
    ["What is the significance of the slip in three-phase induction motors?", "Slip is necessary for the production of torque in three-phase induction motors. It is the difference between synchronous speed and rotor speed and allows the rotor to cut through magnetic lines of flux, inducing current and producing torque."],
    ["What are the types of three-phase induction motors based on their rotor construction?", "Three-phase induction motors can be classified as squirrel-cage motors or wound-rotor motors based on the construction of their rotor."],
    ["Explain the operation of a wound-rotor induction motor.", "A wound-rotor induction motor has a rotor with external wire windings. The external resistors in the rotor circuit can be adjusted to control the speed and torque characteristics of the motor."],
    ["What is the significance of the stator winding configuration in three-phase induction motors?", "The stator winding configuration determines the number of poles and, consequently, the speed and torque characteristics of the three-phase induction motor."],
    ["What is the main advantage of three-phase induction motors over single-phase motors?", "Three-phase induction motors offer higher efficiency and smoother operation compared to single-phase motors."],
    ["List three common applications of three-phase induction motors.", "Three-phase induction motors are widely used in industrial machinery, air conditioning systems, and water pumping applications."],
    ["What is the primary disadvantage of three-phase induction motors?", "The primary disadvantage of three-phase induction motors is the requirement for a three-phase power supply, which may not be readily available in some locations."],
    ["What is the purpose of the capacitor in a single-phase induction motor?", "The capacitor in a single-phase induction motor is used to create a phase shift, allowing the motor to produce a rotating magnetic field and start the rotor in the absence of a second phase."],
    ["Explain the construction and operation of a split-phase induction motor.", "A split-phase induction motor has two windings in the stator, a main winding, and an auxiliary winding with a phase shift. The phase shift produced by the auxiliary winding helps in starting the motor."],
    ["How does a capacitor-start induction motor differ from a split-phase motor?", "A capacitor-start induction motor has a starting capacitor that is temporarily connected in series with the auxiliary winding during startup, providing additional torque for starting."],
    ["What is the role of the centrifugal switch in a capacitor-start induction motor?", "The centrifugal switch in a capacitor-start induction motor disconnects the starting capacitor and auxiliary winding from the circuit once the motor reaches approximately 75-80% of its full speed."],
    ["Explain the construction and operation of a capacitor-run induction motor.", "A capacitor-run induction motor has a continuous running capacitor in parallel with the main winding, providing improved power factor and efficiency during operation."],
    ["What is the purpose of the centrifugal switch in a capacitor-run induction motor?", "The centrifugal switch in a capacitor-run induction motor disconnects the starting winding from the circuit once the motor reaches approximately 75-80% of its full speed, preventing damage to the starting winding."],
    ["What are the advantages of capacitor-start capacitor-run (CSCR) motors over capacitor-start (CS) or capacitor-run (CR) motors?", "CSCR motors combine the advantages of both CS and CR motors, offering high starting torque and improved running efficiency."],
    ["What are the applications of single-phase induction motors?", "Single-phase induction motors find applications in household appliances, fans, pumps, and small machinery where three-phase power is not available."],
    ["What is the main limitation of single-phase induction motors?", "The main limitation of single-phase induction motors is their lower starting torque compared to three-phase motors, which can affect their ability to start under heavy loads."],
    ["How does earthing help in limiting leakage current in electrical systems?", "Earthing provides a low-resistance path to the ground, allowing any leakage current to flow safely into the ground, preventing electric shocks and minimizing the risk of electrical fires."],
    ["What is the consequence of a high earth fault current in an electrical system?", "A high earth fault current in an electrical system can pose a risk of electrical fires, damage to equipment, and endanger the safety of personnel working with or around the system."],
    ["What is the basic principle behind the operation of a voltmeter?", "The basic principle behind the operation of a voltmeter is to measure the potential difference (voltage) between two points in an electrical circuit, providing information about the circuit's electrical potential."],
    ["Provide an example of a direct method of connecting a measuring instrument.", "One example of a direct method is connecting an ammeter in series with the circuit to directly measure the current flowing through it."],
    ["How is the range of a multimeter extended for measuring higher voltages?", "The range of a multimeter is extended for measuring higher voltages by connecting a resistor in series with the meter, allowing the meter to handle a wider range of voltage values."],
    ["What is a significant disadvantage of digital measuring instruments?", "A significant disadvantage of digital measuring instruments is their slower response time compared to analog instruments, especially in rapidly changing or dynamic electrical conditions."],
    ["What are the environmental concerns associated with lead-acid batteries?", "Lead-acid batteries pose environmental concerns because lead is a toxic heavy metal. Improper disposal can lead to soil and water pollution, impacting ecosystems and human health."],
    ["How do AGM batteries differ from gel batteries in sealed lead-acid (SLA) technology?", "AGM batteries use a glass mat separator to hold the electrolyte, while gel batteries use a gelled electrolyte. Both types are valve-regulated and designed for maintenance-free operation."],
    ["What are some emerging applications of lithium-ion battery technology?", "Lithium-ion batteries are increasingly used in electric vehicles, grid energy storage, and power tools due to their high energy density, longer lifespan, and ability to provide sustained power."],
    ["List factors influencing the capacity of lead-acid batteries.", "Factors influencing capacity include the quantity of active materials, temperature, the number and size of plates, and the rate of discharge."],
    ["How can a lead-acid battery be tested using an open-circuit voltage test?", "To perform an open-circuit voltage test, disconnect one terminal of the battery and connect a voltmeter. A good battery typically shows a voltage of 12.6 V or higher, while a faulty battery may show less than 12 V."],
    ["What is a load test for lead-acid batteries, and how is it conducted?", "A load test involves connecting a discharge tester, adjusting the current to three times the ampere-hour rating, and observing the voltage. A good battery should maintain a voltage of 9.6 V or higher."],
    ["Explain the structure of Sealed Lead-Acid (SLA) batteries.", "Sealed Lead-Acid batteries have a rechargeable and sealed construction. They are valve-regulated (VRLA) and include key components such as plates, electrolyte, separators, case, and a pressure relief valve."],
    ["Describe the discharge process in Sealed Lead-Acid (SLA) batteries.", "During discharge, a chemical reaction occurs between the lead plates and sulfuric acid, leading to the formation of lead sulfate. This process generates electricity."],
    ["How does the charging process work in Sealed Lead-Acid (SLA) batteries?", "During charging, an external voltage is applied, reversing the chemical reaction. This regenerates lead and lead dioxide on the plates while internally recombining oxygen and hydrogen."],
    ["List three common applications of Sealed Lead-Acid (SLA) batteries.", "Common applications include Uninterruptible Power Supplies (UPS), Emergency Lighting Systems, and Medical Equipment due to their maintenance-free and reliable operation."],
    ["What are the advantages of Sealed Lead-Acid (SLA) batteries over traditional lead-acid batteries?", "Advantages include being maintenance-free, leak-proof, spill-proof, having a lower self-discharge rate, and being versatile in terms of mounting positions."],
    ["Why is the quantity of active materials a factor influencing the capacity of lead-acid batteries?", "The quantity of active materials directly determines the amount of material available for the chemical reactions that produce electrical energy in lead-acid batteries."],
    ["Why is the open-circuit voltage test performed on lead-acid batteries, and what does a low reading indicate?", "The open-circuit voltage test is performed to check the health of a lead-acid battery. A low reading, typically less than 12 V, indicates a potentially faulty or depleted battery."],
    ["What is the purpose of a valve in valve-regulated lead-acid (VRLA) batteries?", "The valve in VRLA batteries controls the flow of gases, preventing overpressure. It also helps recombine hydrogen with oxygen to maintain a safe and sealed environment."],
    ["Explain the construction of VRLA cells and their resistance to vibration.", "VRLA cells have immobilized electrolyte, surrounded by lead plates. This design makes them resistant to vibration, ensuring stability and reliability in various applications."],
    ["What are the two main types of VRLA batteries mentioned in the text?", "The two main types of VRLA batteries are Absorbent Glass Mat (AGM) batteries and Gel batteries, both offering maintenance-free operation and spill-proof design."],
    ["How does the construction of AGM batteries differ from Gel batteries in VRLA technology?", "AGM batteries use a glass mat separator to hold the electrolyte, providing a higher power density. Gel batteries, on the other hand, have a gelled electrolyte for improved stability."],
    ["List three applications of VRLA batteries.", "VRLA batteries find applications in Uninterruptible Power Supplies (UPS), motorcycle batteries, and scooter batteries due to their maintenance-free operation and reliable performance."],
    ["What are the advantages of VRLA batteries listed in the text?", "Advantages include being maintenance-free, spill-proof, leak-proof, mountable in any position, having a long lifespan, deep discharge recovery, and high-rate discharge capability."],
    ["What are the disadvantages of VRLA batteries mentioned?", "Disadvantages include a higher initial cost compared to flooded lead-acid batteries and a reduced tolerance to high temperatures, which can affect their performance."],
    ["What are the advantages of Absorbent Glass Mat (AGM) batteries?", "AGM batteries offer advantages such as a long lifespan, resistance to vibration, high electrical demand handling, greater mounting flexibility, no spillage of electrolyte, and reasonably maintenance-free operation."],
    ["What are the listed disadvantages of AGM batteries?", "Disadvantages include a higher cost, reduced capacity over time, and sensitivity to overcharging, which can affect the overall performance and lifespan of AGM batteries."],
    ["What safety precautions are mentioned for handling lead-acid batteries?", "Safety precautions include wearing eye and acid-resistant gloves, working in a well-ventilated area, avoiding smoking or eating near batteries, not touching terminals with bare hands, avoiding dropping batteries, washing immediately if in contact with battery acid, and proper disposal of batteries."],
    ["Describe the construction of a flooded lead-acid battery.", "Flooded lead-acid batteries have positive and negative plates immersed in a liquid electrolyte solution, usually sulfuric acid and water. The positive plates are made of lead dioxide, and the negative plates are made of lead."],
    ["What happens to hydrogen gas produced during discharge in a flooded lead-acid battery?", "In a flooded lead-acid battery, hydrogen gas produced during discharge is released into the atmosphere, potentially requiring ventilation in certain applications."],
    ["How does a sealed lead-acid (SLA) battery differ in handling hydrogen gas compared to a flooded lead-acid battery?", "In a sealed lead-acid (SLA) battery, hydrogen gas is recombined with oxygen from the plates to form water internally. This eliminates the need for external ventilation and makes SLA batteries safer in confined spaces."],
    ["What steps are listed for fault finding on lead-acid batteries?", "Steps for fault finding on lead-acid batteries include checking the electrolyte level, cleaning battery terminals, load testing the battery, and inspecting for loose or damaged connections."],
    ["What is the purpose of cleaning battery terminals during maintenance?", "Cleaning battery terminals during maintenance is important to remove corrosion, ensuring good electrical contact and preventing issues like starting problems or intermittent electrical connections."],
    ["How is the electrolyte level maintained in lead-acid batteries?", "The electrolyte level in lead-acid batteries is maintained by adding distilled water if the level is low. Regular checking and topping up are essential for optimal battery performance."],
    ["What is the purpose of load testing a lead-acid battery?", "Load testing a lead-acid battery helps assess its health by measuring the voltage under a simulated load. A good battery should maintain a voltage above a specified threshold, indicating its ability to handle loads."],
    ["Why is it important to dispose of lead-acid batteries properly?", "It is important to dispose of lead-acid batteries properly because they contain hazardous substances, including lead and sulfuric acid. Improper disposal can lead to environmental pollution and harm to human health."],
    ["What is the main function of DC machines?", "The main function of DC machines is to convert mechanical energy into electrical energy (as generators) or vice versa (as motors)."],
    ["Explain the construction of DC machines.", "DC machines consist of a stator, rotor, commutator, and brushes. The stator produces a magnetic field, the rotor has conductors carrying current, the commutator reverses the current direction, and brushes maintain electrical contact."],
    ["What is the purpose of the commutator in a DC machine?", "The commutator in a DC machine reverses the direction of current in the rotor windings, ensuring continuous rotation in DC motors and the generation of direct current in DC generators."],
    ["Differentiate between DC motors and DC generators.", "DC motors convert electrical energy into mechanical energy, producing rotation. DC generators convert mechanical energy into electrical energy by generating direct current."],
    ["How does a DC motor operate?", "A DC motor operates by passing electric current through the rotor windings placed in a magnetic field. This interaction generates torque, causing the rotor to rotate and perform mechanical work."],
    ["What is the principle behind the operation of DC generators?", "DC generators operate on the principle of electromagnetic induction. As the rotor (armature) rotates in a magnetic field, a voltage is induced, resulting in the generation of direct current."],
    ["In DC generators, what is the role of the brushes?", "The brushes in DC generators maintain electrical contact with the rotating commutator. They allow the generated current to be collected from the rotor windings and transferred to external circuits."],
    ["Explain the function of the stator in DC machines.", "The stator in DC machines provides a stationary magnetic field. This field interacts with the rotor's magnetic field, inducing electric current in DC generators or producing torque in DC motors."],
    ["What happens when the armature rotates in the magnetic field of a DC motor?", "When the armature rotates in the magnetic field of a DC motor, torque is generated. This torque causes the motor to turn, converting electrical energy into mechanical energy."],
    ["How does a DC motor reverse its direction of rotation?", "The direction of rotation in a DC motor can be reversed by changing the polarity of either the field winding or the armature winding."],
    ["What factors influence the speed of a DC motor?", "The speed of a DC motor is influenced by the applied voltage, the strength of the magnetic field, and the mechanical load on the motor."],
    ["Why is the commutator necessary in DC motors?", "The commutator is necessary in DC motors to reverse the direction of current in the rotor windings at the right moment. This reversal ensures continuous rotation in the same direction."],
    ["What is the role of brushes in DC motors?", "Brushes in DC motors maintain electrical contact with the commutator. They allow the current to flow through the rotor windings, producing rotation."],
    ["How is the speed of a DC motor controlled?", "The speed of a DC motor can be controlled by adjusting the applied voltage, changing the current in the field winding, or using external resistors in series with the armature."],
    ["What are the key components of a DC motor?", "Key components of a DC motor include the stator, rotor, commutator, brushes, and sometimes a field winding."],
    ["What is the difference between a separately excited DC motor and a self-excited DC motor?", "In a separately excited DC motor, the field winding is supplied by an external source. In a self-excited DC motor, the field winding is connected to the same source as the armature winding."],
    ["How does a DC shunt motor differ from a DC series motor?", "A DC shunt motor has the field winding connected in parallel (shunt) with the armature winding. In a DC series motor, the field winding is connected in series with the armature winding."],
    ["Explain the construction and working principle of a DC compound motor.", "A DC compound motor combines features of both series and shunt motors. It has both series and shunt field windings, providing a compromise between high starting torque and constant speed."],
    ["What are the advantages of DC motors?", "Advantages of DC motors include simplicity, ease of speed control, and the ability to provide high starting torque."],
    ["What are the disadvantages of DC motors?", "Disadvantages include the need for regular maintenance of brushes and commutators, limited speed control range, and the potential for sparking at the commutator."],
    ["How does a DC generator produce direct current?", "A DC generator produces direct current by using a commutator to reverse the direction of the generated current in the armature windings, resulting in a unidirectional output."],
    ["What is the role of the armature in a DC generator?", "The armature in a DC generator consists of conductors that cut through magnetic lines of flux, inducing a voltage as the armature rotates. This induction leads to the generation of direct current."],
    ["What are the types of DC generators based on their field winding connections?", "DC generators can be classified as shunt-wound, series-wound, or compound-wound based on the connection of their field windings."],
    ["Explain the working principle of a shunt-wound DC generator.", "In a shunt-wound DC generator, the field winding is connected in parallel (shunt) with the armature winding. It produces a nearly constant voltage under varying loads due to the independence of the field circuit."],
    ["How does a series-wound DC generator differ from a shunt-wound generator?", "In a series-wound DC generator, the field winding is connected in series with the armature winding. It provides a high output current under varying loads but may have a less stable voltage."],
    ["What is the construction and purpose of a commutator in DC generators?", "The commutator in DC generators is a rotary switch that reverses the direction of current in the armature windings, ensuring a unidirectional output of direct current."],
    ["What are the applications of DC generators?", "DC generators find applications in battery charging, electroplating, traction, and situations where a stable direct current source is required."],
    ["What are the advantages of DC generators?", "Advantages include simplicity, ease of maintenance, and the ability to provide a stable and direct current output."],
    ["What are the disadvantages of DC generators?", "Disadvantages include the need for regular maintenance of brushes and commutators, limited scalability, and the presence of sparking at the commutator."],
    ["What is the principle behind the operation of three-phase induction motors?", "Three-phase induction motors operate on the principle of electromagnetic induction, where a rotating magnetic field in the stator induces current flow in the rotor, producing torque and motor rotation."],
    ["How does the speed of a three-phase induction motor compare to the speed of the rotating magnetic field?", "The speed of a three-phase induction motor is slightly less than the speed of the rotating magnetic field, resulting in slip, which is necessary for the production of torque."],
    ["Explain the construction of a three-phase induction motor.", "A three-phase induction motor consists of a stator with three sets of windings, a rotor with conductors, and end rings. The stator produces a rotating magnetic field, inducing current flow in the rotor and causing motor rotation."],
    ["What is the purpose of the squirrel-cage rotor in a three-phase induction motor?", "The squirrel-cage rotor consists of conductors forming a shorted loop, creating a closed circuit that allows induced current to flow, producing torque and motor rotation."],
    ["Differentiate between a synchronous speed and an asynchronous speed in three-phase induction motors.", "Synchronous speed is the speed of the rotating magnetic field, while asynchronous speed is the speed of the rotor, which is slightly less than synchronous speed due to slip."],
    ["What is the significance of the slip in three-phase induction motors?", "Slip is necessary for the production of torque in three-phase induction motors. It is the difference between synchronous speed and rotor speed and allows the rotor to cut through magnetic lines of flux, inducing current and producing torque."],
    ["What are the types of three-phase induction motors based on their rotor construction?", "Three-phase induction motors can be classified as squirrel-cage motors or wound-rotor motors based on the construction of their rotor."],
    ["Explain the operation of a wound-rotor induction motor.", "A wound-rotor induction motor has a rotor with external wire windings. The external resistors in the rotor circuit can be adjusted to control the speed and torque characteristics of the motor."],
    ["What is the significance of the stator winding configuration in three-phase induction motors?", "The stator winding configuration determines the number of poles and, consequently, the speed and torque characteristics of the three-phase induction motor."],
    ["What is the main advantage of three-phase induction motors over single-phase motors?", "Three-phase induction motors offer higher efficiency and smoother operation compared to single-phase motors."],
    ["List three common applications of three-phase induction motors.", "Three-phase induction motors are widely used in industrial machinery, air conditioning systems, and water pumping applications."],
    ["What is the primary disadvantage of three-phase induction motors?", "The primary disadvantage of three-phase induction motors is the requirement for a three-phase power supply, which may not be readily available in some locations."],
    ["What is the purpose of the capacitor in a single-phase induction motor?", "The capacitor in a single-phase induction motor is used to create a phase shift, allowing the motor to produce a rotating magnetic field and start the rotor in the absence of a second phase."],
    ["Explain the construction and operation of a split-phase induction motor.", "A split-phase induction motor has two windings in the stator, a main winding, and an auxiliary winding with a phase shift. The phase shift produced by the auxiliary winding helps in starting the motor."],
    ["How does a capacitor-start induction motor differ from a split-phase motor?", "A capacitor-start induction motor has a starting capacitor that is temporarily connected in series with the auxiliary winding during startup, providing additional torque for starting."],
    ["What is the role of the centrifugal switch in a capacitor-start induction motor?", "The centrifugal switch in a capacitor-start induction motor disconnects the starting capacitor and auxiliary winding from the circuit once the motor reaches approximately 75-80% of its full speed."],
    ["Explain the construction and operation of a capacitor-run induction motor.", "A capacitor-run induction motor has a continuous running capacitor in parallel with the main winding, providing improved power factor and efficiency during operation."],
    ["What is the purpose of the centrifugal switch in a capacitor-run induction motor?", "The centrifugal switch in a capacitor-run induction motor disconnects the starting winding from the circuit once the motor reaches approximately 75-80% of its full speed, preventing damage to the starting winding."],
    ["What are the advantages of capacitor-start capacitor-run (CSCR) motors over capacitor-start (CS) or capacitor-run (CR) motors?", "CSCR motors combine the advantages of both CS and CR motors, offering high starting torque and improved running efficiency."],
    ["What are the applications of single-phase induction motors?", "Single-phase induction motors find applications in household appliances, fans, pumps, and small machinery where three-phase power is not available."],
    ["What is the main limitation of single-phase induction motors?", "The main limitation of single-phase induction motors is their lower starting torque compared to three-phase motors, which can affect their ability to start under heavy loads."],
    ["How does earthing help in limiting leakage current in electrical systems?", "Earthing provides a low-resistance path to the ground, allowing any leakage current to flow safely into the ground, preventing electric shocks and minimizing the risk of electrical fires."],
    ["What is the consequence of a high earth fault current in an electrical system?", "A high earth fault current in an electrical system can pose a risk of electrical fires, damage to equipment, and endanger the safety of personnel working with or around the system."],
    ["What is the basic principle behind the operation of a voltmeter?", "The basic principle behind the operation of a voltmeter is to measure the potential difference (voltage) between two points in an electrical circuit, providing information about the circuit's electrical potential."],
    ["Provide an example of a direct method of connecting a measuring instrument.", "One example of a direct method is connecting an ammeter in series with the circuit to directly measure the current flowing through it."],
    ["How is the range of a multimeter extended for measuring higher voltages?", "The range of a multimeter is extended for measuring higher voltages by connecting a resistor in series with the meter, allowing the meter to handle a wider range of voltage values."],
    ["What is a significant disadvantage of digital measuring instruments?", "A significant disadvantage of digital measuring instruments is their slower response time compared to analog instruments, especially in rapidly changing or dynamic electrical conditions."],
    ["What are the environmental concerns associated with lead-acid batteries?", "Lead-acid batteries pose environmental concerns because lead is a toxic heavy metal. Improper disposal can lead to soil and water pollution, impacting ecosystems and human health."],
    ["How do AGM batteries differ from gel batteries in sealed lead-acid (SLA) technology?", "AGM batteries use a glass mat separator to hold the electrolyte, while gel batteries use a gelled electrolyte. Both types are valve-regulated and designed for maintenance-free operation."],
    ["What are some emerging applications of lithium-ion battery technology?", "Lithium-ion batteries are increasingly used in electric vehicles, grid energy storage, and power tools due to their high energy density, longer lifespan, and ability to provide sustained power."],
    ["List factors influencing the capacity of lead-acid batteries.", "Factors influencing capacity include the quantity of active materials, temperature, the number and size of plates, and the rate of discharge."],
    ["How can a lead-acid battery be tested using an open-circuit voltage test?", "To perform an open-circuit voltage test, disconnect one terminal of the battery and connect a voltmeter. A good battery typically shows a voltage of 12.6 V or higher, while a faulty battery may show less than 12 V."],
    ["What is a load test for lead-acid batteries, and how is it conducted?", "A load test involves connecting a discharge tester, adjusting the current to three times the ampere-hour rating, and observing the voltage. A good battery should maintain a voltage of 9.6 V or higher."],
    ["Explain the structure of Sealed Lead-Acid (SLA) batteries.", "Sealed Lead-Acid batteries have a rechargeable and sealed construction. They are valve-regulated (VRLA) and include key components such as plates, electrolyte, separators, case, and a pressure relief valve."],
    ["Describe the discharge process in Sealed Lead-Acid (SLA) batteries.", "During discharge, a chemical reaction occurs between the lead plates and sulfuric acid, leading to the formation of lead sulfate. This process generates electricity."],
    ["How does the charging process work in Sealed Lead-Acid (SLA) batteries?", "During charging, an external voltage is applied, reversing the chemical reaction. This regenerates lead and lead dioxide on the plates while internally recombining oxygen and hydrogen."],
    ["List three common applications of Sealed Lead-Acid (SLA) batteries.", "Common applications include Uninterruptible Power Supplies (UPS), Emergency Lighting Systems, and Medical Equipment due to their maintenance-free and reliable operation."],
    ["What are the advantages of Sealed Lead-Acid (SLA) batteries over traditional lead-acid batteries?", "Advantages include being maintenance-free, leak-proof, spill-proof, having a lower self-discharge rate, and being versatile in terms of mounting positions."],
    ["Why is the quantity of active materials a factor influencing the capacity of lead-acid batteries?", "The quantity of active materials directly determines the amount of material available for the chemical reactions that produce electrical energy in lead-acid batteries."],
    ["Why is the open-circuit voltage test performed on lead-acid batteries, and what does a low reading indicate?", "The open-circuit voltage test is performed to check the health of a lead-acid battery. A low reading, typically less than 12 V, indicates a potentially faulty or depleted battery."],
    ["What is the purpose of a valve in valve-regulated lead-acid (VRLA) batteries?", "The valve in VRLA batteries controls the flow of gases, preventing overpressure. It also helps recombine hydrogen with oxygen to maintain a safe and sealed environment."],
    ["Explain the construction of VRLA cells and their resistance to vibration.", "VRLA cells have immobilized electrolyte, surrounded by lead plates. This design makes them resistant to vibration, ensuring stability and reliability in various applications."],
    ["What are the two main types of VRLA batteries mentioned in the text?", "The two main types of VRLA batteries are Absorbent Glass Mat (AGM) batteries and Gel batteries, both offering maintenance-free operation and spill-proof design."],
    ["How does the construction of AGM batteries differ from Gel batteries in VRLA technology?", "AGM batteries use a glass mat separator to hold the electrolyte, providing a higher power density. Gel batteries, on the other hand, have a gelled electrolyte for improved stability."],
    ["List three applications of VRLA batteries.", "VRLA batteries find applications in Uninterruptible Power Supplies (UPS), motorcycle batteries, and scooter batteries due to their maintenance-free operation and reliable performance."],
    ["What are the advantages of VRLA batteries listed in the text?", "Advantages include being maintenance-free, spill-proof, leak-proof, mountable in any position, having a long lifespan, deep discharge recovery, and high-rate discharge capability."],
    ["What are the disadvantages of VRLA batteries mentioned?", "Disadvantages include a higher initial cost compared to flooded lead-acid batteries and a reduced tolerance to high temperatures, which can affect their performance."],
    ["What are the advantages of Absorbent Glass Mat (AGM) batteries?", "AGM batteries offer advantages such as a long lifespan, resistance to vibration, high electrical demand handling, greater mounting flexibility, no spillage of electrolyte, and reasonably maintenance-free operation."],
    ["What are the listed disadvantages of AGM batteries?", "Disadvantages include a higher cost, reduced capacity over time, and sensitivity to overcharging, which can affect the overall performance and lifespan of AGM batteries."],
    ["What safety precautions are mentioned for handling lead-acid batteries?", "Safety precautions include wearing eye and acid-resistant gloves, working in a well-ventilated area, avoiding smoking or eating near batteries, not touching terminals with bare hands, avoiding dropping batteries, washing immediately if in contact with battery acid, and proper disposal of batteries."],
]);


let quizMap = shuffleArray([...originalQuizMap]); // Randomize question order
let currentQuestionIndex = 0;
let score = 0;
let timer;

function displayNextQuestion() {
 // Add countdown timer for each question (e.g., 15 seconds)
let timeLeft = 60;
timer = setInterval(() => {
  document.getElementById('progress-bar-inner').style.width = (timeLeft / 15) * 100 + '%';

  if (timeLeft <= 15) {
    document.getElementById('progress-bar-inner').style.backgroundColor = '#f44336';  // Change color to red
  } else {
    document.getElementById('progress-bar-inner').style.backgroundColor = '#4caf50';  // Change color to green
  }

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    checkAnswer(); // Mark the question as incorrect when time runs out
  }
}, 1000);


  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer-input");
  const resultElement = document.getElementById("result");

  // Check if there are still questions left
  if (currentQuestionIndex < quizMap.length) {
    const [question, _] = quizMap[currentQuestionIndex];
    questionElement.textContent = "Question: " + question;
    answerInput.value = "";
    resultElement.textContent = "";
    currentQuestionIndex++;
  } else {
    showFinalResult();
  }
}

function checkAnswer() {
  clearInterval(timer); // Stop the timer
  const answerInput = document.getElementById("answer-input");
  const resultElement = document.getElementById("result");

  // Check if there are still questions left
  if (currentQuestionIndex <= quizMap.length) {
    const [_, correctAnswer] = quizMap[currentQuestionIndex - 1];
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
      resultElement.style.color = "#4caf50"; // Green for correct answer
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.style.color = "#f44336"; // Red for incorrect answer
      resultElement.textContent =
        "Incorrect. The correct answer is: " + correctAnswer;
    }

    if (currentQuestionIndex < quizMap.length) {
      setTimeout(displayNextQuestion, 2000); // Display next question after 2 seconds
    } else {
      showFinalResult();
    }
  }
}

let skippedQuestions = [];

function skipQuestion() {
  clearInterval(timer); // Stop the timer
  const resultElement = document.getElementById("result");
  resultElement.style.color = "#2196F3"; // Blue for skipped question
  resultElement.textContent = "Question skipped.";

  // Keep track of the skipped question for later display
  const [question, correctAnswer] = quizMap[currentQuestionIndex - 1];
  skippedQuestions.push({ question, correctAnswer, skipped: true });

  setTimeout(displayNextQuestion, 2000); // Display next question after 2 seconds
}


function startNewQuiz() {
    // Reset variables and start a new quiz
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(timer);

    // Reset the skipped questions array for the new quiz
    skippedQuestions = [];

    quizMap = shuffleArray([...originalQuizMap]);
    document.getElementById('skip-button').style.display = 'inline-block'; // Show the "Skip Question" button

    // Reset the progress bar color to green
    document.getElementById('progress-bar-inner').style.backgroundColor = '#4caf50';

    // Reset the width of the progress bar to 100%
    document.getElementById('progress-bar-inner').style.width = '100%';

    // Make sure the input field is visible, centered, and has margin-bottom
    const answerInput = document.getElementById('answer-input');
    answerInput.style.display = 'block';
    answerInput.style.margin = 'auto';
    answerInput.style.marginBottom = '10px'; // Add margin-bottom

    // Show the progress bar container
    document.getElementById('progress-bar-container').style.display = 'block';

    // Clear the result element content
    resultElement.textContent = "";

    displayNextQuestion();
}

function showFinalResult() {
    clearInterval(timer); // Stop the timer
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const resultElement = document.getElementById('result');
    const progressBarContainer = document.getElementById('progress-bar-container');
  
    questionElement.textContent = '';
    answerInput.style.display = 'none';
    resultElement.style.fontSize = '24px';
    resultElement.textContent = 'Your final score is: ' + score + ' out of ' + originalQuizMap.size;
  
    // Hide the progress bar container
    progressBarContainer.style.display = 'none';
  
    // Display skipped questions
    skippedQuestions.forEach((skippedQuestion, index) => {
      resultElement.innerHTML += `<br>Skipped Question ${index + 1}: ${skippedQuestion.question}. Correct Answer: ${skippedQuestion.correctAnswer}`;
    });
  
    // Stop the program here
    currentQuestionIndex = quizMap.length + 1;
    hideSkipButton();
  }
  


function hideSkipButton() {
    // Hide the "Skip Question" button when the quiz ends
    document.getElementById('skip-button').style.display = 'none';
  }

// Initial display
displayNextQuestion();
