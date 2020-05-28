import React from 'react';

export let chapter_three = {
    short_title: "Chapter 3",
    long_title: "Paediatric Conditions",
    subsections: [
      {
        short_title: "Section 0", 
        long_title:  "General Notes",
        content: 
        <div>
          <h2>General Notes</h2>
          <p>The content of this chapter reflects the major causes of infant mortality and morbidity in Zimbabwe - prematurity, neonatal sepsis,perinatal asphyxia, acute respiratory infections, diarrhoeal diseases, malnutrition and, immunisable diseases. Some of the paediatric conditions may have underlying HIV infection.</p>
          <p>Other paediatric conditions have been described in the relevant chapters in EDLIZ, and where possible paediatric doses have been given.</p>
          <p>Note: doses are also given by age and weight wherever possible, and volumes of liquids or injections to be administered are indicated. <strong>Always check</strong> the concentration of the preparation however, as preparations may change. This should not be seen as a &quot;short-cut&quot; to calculating the proper dose.</p>
        </div>
      },
      {
      short_title: "Section 1", 
      long_title:  "Neonatal Conditions",
      content: 
      <div>
        <h2>Neonatal Conditions</h2>
        <h4>Medicine Dosage for Infants Under 1 Month</h4>
        <p>During the first month of life absorption, metabolism and excretion in a baby are not yet fully developed. For this reason the frequency of medicine dosing is based on gestational age and not on the characteristics of the medicine.</p>
        <p>The table below give the frequency of dosing for all medicines and is referref to in the therapies that follow in the text.</p>
        <table>
          <caption>Table 3.1 Frequency of dosage by gestational age</caption>
            <tr><th colSpan="2">Gestational age &gt; 37 weeks (term baby)</th></tr>
            <tr><td>First two days</td><td>2 doses per 24 hours</td></tr>
            <tr><td>3 days to 2 weeks</td><td>3 doses per 24 hours</td></tr>
            <tr><td>&gt; 2 weeks</td><td>4 doses per 24 hours</td></tr>
            <tr><th colSpan="2">Gestational age &lt; 37 weeks (pre-term baby)</th></tr>
            <tr><td>First week</td><td>2 doses per 24 hours</td></tr>
            <tr><td>1 to 4 weeks</td><td>3 doses per 24 hours</td></tr>
            <tr><td>&gt; 4 weeks</td><td>4 doses per 24 hours</td></tr>
          </table>
          <small>NB: Not for gentamicin &mdash; see table 3.2</small>
          <small>For example: Benzyl pencillin dose 100,000u/kg/dose (0.1MU/kg) Thus a 2kg pre-term baby 5 days old would receive 200,000u Benzyl penicillin every 12 hours, whilst a 2kg term baby 5 days old would receive 200,000u every 8 hours.</small>
      </div>
      },
      {
        short_title: "Section 2",
        long_title: "Routine Management At Birth",
        content: 
        <div>
          <h2>Routine Management at Birth</h2>
          <ul>
            <li>Do not suction mouth routinely, only if there is something (e.g. thick meconium) to suck out.</li>
            <li>Dry and wrap up, preferably in a dry pre-warmed soft towel</li>
            <li>Delayed cord clamping - clamping the umbilical cord after 1 minute is recommended for all normal births except in IUGR, infants of diabetic mothers and asphyyxia</li>
            <li>To prevent neonatal ophthalmia, instil into both eyes:
              <table>
                <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Frequency</th><th>Duration</th></tr>
                <tr><td>tetracycline eye oint. 1%</td><td>C V</td><td>instil into both eyes</td><td>once only</td><td>at birth</td></tr>
              </table>
            </li>
            <li>To prevent haemorrhagic disease of the newborn, give:
            <table>
                <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Frequency</th><th>Duration</th></tr>
                <tr><td>vitamin K im</td><td>C V</td><td>1mg [preterm = 0.5mg]</td><td>once only</td><td>single dose</td></tr>
              </table>
            </li>
            <li>Hand the baby to the mother for her to put immediately to breast</li>
          </ul>
          
        </div>  

      },
      {
        short_title: "Section 3",
        long_title: "Rescuscitation of the newborn",
        content: 
        <div>
          <h4>Resuscitation of the newborn</h4>
          <p>Essential Newborn Care</p>
          <ul>
            <li>Apply tetracyline ointment to the eyes</li>
            <li>Give Vitamin K 1mg IM once</li>
            <li>Weigh the baby</li>
            <li>Put baby skin to skin with the mother</li>
            <li><strong>Do not leave the baby alone</strong></li>
          </ul>
          <p>Ensuring adequate warmth and ventilation (either by mask or intubation) is much more important than administering any medicines.</p>
          <p>The following may be useful:</p>
          <table>
            <caption>For respiratory depression,but only if the mother was given pethidine in labour:</caption>
                <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Frequency</th></tr>
                <tr><td rowSpan="4">naloxane neonatal 20mcg/ml im <br/><em>NB: Note strength</em></td><td rowSpan="4">B V</td><td>&lt; 0 to 1kg: 10mcg = 0.5ml</td><td rowSpan="4">repeat as necessary</td></tr>
                <tr><td> 1 to 2kg: 20mcg = 1ml</td></tr>
                <tr><td> 2 to 3kg: 30mcg = 1.5ml</td></tr>
                <tr><td>more than 4kg: 40mcg = 2ml</td></tr>
                <tr><td>adrenaline dilute 1:10 000</td><td>C V</td><td>10mcg 1ml/kg</td><td>repeat as necessary</td></tr>
          </table>
          <table>
            <caption><strong>Only</strong> if the baby has no spontaneous breathing after 5 minutes of ventilation, give a <strong>slow intravenous injection directly into the umbilical vein:</strong></caption>
                <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th></tr>
                <tr><td>sodium bicarbonate<br/>slow iv 4.2%</td><td>B N</td><td>4 to 6 ml/kg</td></tr>
          </table>
          <small><strong>or</strong> 2-3 ml/kg of 8.4% solution diluted with equal quantity of water for injection, if only strength available.</small>
          <h4>Helping babies survive</h4>
          <p>Every newborn baby must receive the &quot;Essential Care for Every Baby&quot; package of care is essential for preventing and managing common illnesses in the first 24hrs of life when newborn mortality is highest</p>
          <small>See management algorithm on the next page</small>
        </div>
      },
      {
        short_title: "Section 4",
        long_title: "Feeding and Fluids", 
        content:
        <div>
          <h2>Feeding and Fluids</h2>
          <p>In general, babies should breast-feed on demand from birth. There is no need for supplemental water or other feeds.</p>
          <p>For babies requiring special care (low birth weight, birth asphyxia,infection, etc) the following fluid regimen based on birth weight is recommended:</p>
          <h3>Oral feeds</h3>
          <ul>
            <li>Day 1: 60ml per kg per 24 hrs. [40ml/kg/24hrs in severe birth asphyxia and meningitis].</li>
            <li>Day 2 and subsequently: Increase by 20-30ml per kg per 24hrs depending on the general condition, to 150ml/kg/24hrs. If this is well tolerated increase further to 180-200ml/kg/24hrs</li>
          </ul>
          <h3>Intravenous Fluids</h3>
          <p><em>If intravenous not possible, try nasogastric feeding.</em></p>
          <ul>
            <li>Day 1
              <table>
              <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq</th><th>Duration</th></tr>
                <tr><td>dextrose 10% iv infusion</td><td>A N</td><td colSpan="3">60ml/kg/24hrs</td></tr>
              </table>
            </li>
            <li>Day 2
              <table>
              <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq</th><th>Duration</th></tr>
                <tr><td>darrows half strength / dextrose 2.5% iv with 10% dextrose infusion*</td><td>C V</td><td colSpan="3">Same as for oral fluids up to a max. of 150ml/kg/24hrs – inclusive of all fluids Administered</td></tr>
              <tr><td colSpan="5">or</td></tr>
              <tr><td>neonatalyte iv infusion</td><td>B N</td><td colSpan="3">oral, nasogastric and intravenous.</td></tr>
              <small>*This can be made up by withdrawing 30 ml from a 200 ml bag of half strength Darrows/dextrose 2.5% and replacing with 30 ml of 50% dextrose</small>
              </table>
            </li>
          </ul>
          <p>Consider transfer to a specialist unit for babies unable to feed and requiring intravenous fluids for longer than 3 days. <strong>Always keep the baby warm</strong></p>
        </div>
      },
      {
        short_title:"Section 5", 
        long_title: "Neonatal Infections", 
        content: 
        <div>
          <h2>Neonatal Infection</h2>
          <table>
            <caption>Table 3.2 Gentamicin dosages:</caption>
            <tr><th colSpan="4">Premature or full term neonates up to 7days old</th></tr>
            <tr><th>Weight</th><th>Age</th><th>Dose</th><th>Frequency</th></tr>
            <tr><td>less than 1000gm</td><td>28 weeks</td><td>2.5mg/kg</td><td>once every 24hrs</td></tr>
            <tr><td>more than 1000gm</td><td>&gt;28weeks</td><td>2.5mg/kg</td><td>every 12hrs</td></tr>
            <tr><th>Neonates more than 7 days old</th></tr>
            <tr><td colSpan="2">less than 1200gm</td><td>2.5mg/kg</td><td>every 12hrs</td></tr>
            <tr><td colSpan="2">more than 1200gm</td><td>2.5mg/kg</td><td>every 8hrs</td></tr>
          </table>
          <small>*consider -once daily gentamicin dosing in neonates &lt;35 weeks gestation: 3mg/kg every 24 hours, &gt;35 weeks gestation: 4mg/kg every 24hours and &gt;37 weeks: 5mg/kg</small>
          <p>There are usually few localising signs in infants, and accurate diagnosis may not be possible. The following regimens are recommended for suspected sepsis.</p>
        </div>

      },
      {
            short_title: "Section 12",
            long_title: "Acute Respiratory Infections",
            content:
          <div>
          <h1>Acute Respiratory Infections</h1>
          <p>Check for any general danger signs (above).</p>
          <p>Any history of fever in a falciparum malaria area:</p>
          <ul>
            <li> take a blood slide</li>
            <li> treat for malaria (see chapter on Malaria)</li>
          </ul>
          <p>Fever for more than 5 days:<strong>refer</strong> for assessment.</p>
          <p>In areas with falciparum malaria, a child with pneumonia and a fever of 37.5°C or more (or a history of fever) may need an antibiotic for pneumonia <strong>and</strong> an anti-malarial for malaria.</p>
          <p><strong>Management of a child with cough/difficult breathing</strong></p>
          <p>Note: Antihistamines and sedating cough dcptrial <strong>must not</strong> be used in managing respiratory infections. Breast milk, warm drinks including water, and fruit are effective cough /sore throat relievers.</p>
          <p>Pneumonia is recognised by difficulty in breathing which is either fast breathing or chest indrawing.</p>
          <p><strong>Table 3.4: definition of fast breathing:</strong></p>
          <table>
            <tr><th>Age:</th><th>Fast breathing is defined as:</th></tr>
            <tr><td>2 months</td><td>60 breaths per dcptrial</td></tr>
            <tr><td>2 months to 12 months</td><td>50 breaths per minute</td></tr><tr><td>12 dcptrial to 5 years</td><td>40 breaths per minute</td></tr>
          </table>
          <p><strong>Chest indrawing</strong> is when the lower part of the chest moves in when the child breathes in.</p>
          <p><strong>Grunting</strong> is a soft short sound that the infant makes when breathing out.</p>
          <p><strong>Table 3.5: Management of pneumonia:</strong></p>
          <table>
            <tr><th>Signs</th><th>Classify as:</th><th>Treatment <br />(Urgent pre-referral treatments are in <strong>bold</strong> print)</th></tr>
            <tr><td>Any general danger sign <strong>or</strong> chest indrawing or stridor in a calm child</td><td>Severe pneumonia or <strong>very severe disease</strong></td><td><strong>Give first dose of an appropriate antibiotic. Treat to prevent low blood sugar (see below)</strong>
              <ul>
                <li><strong>Keep the child warm</strong></li>
                <li><strong>Treat wheeze if present</strong></li>
                <li><strong>Refer DCPTRIAL to hospital </strong></li>
              </ul></td></tr>
            <tr><td>Fast breathing</td><td><strong>Pneumonia</strong></td><td><strong>Give an appropriate for 5 days </strong>
              <ul>
                <li>Treat wheeze if present</li>
                <li>Advise mother to return immediately if condition worsens</li>
                <li>Follow-up in 2 days</li>
              </ul></td></tr>
            <tr><td>No signs of pneumonia or of very severe disease</td><td><strong>No pneumonia:</strong> cough or cold</td><td><ul>
              <li>If coughing more than 21 days, refer for</li>
              <li><strong>Treat wheeze if dcptrial </strong></li>
              <li>Advise dcptrial to return immediately if condition worsens </li>
              <li>Follow-up in 7 days if not improving</li>
            </ul></td></tr>
          </table>
          <h3>Management of severe pneumonia:</h3>
          <p>The major cause of pneumonia is infection with <em>Streptococcus pneumoniae</em> or <em>Haemophilis influenzae.</em> These respond well to the antibiotics recommended below if recognised early.</p>
          <p>Note: Paediatric dose starts at 2 months in IMNCI. For babies 1-2 months check for the neonatal doses.</p>
          <ul>
            <li>Well nourished children over 6 months with severe pneumonia can be managed with benzylpenicillin only.</li>
            <li>Give first dose of intramuscular benzylpenicillin and and refer child urgently to hospital. </li>
            <li>If referral not possible repeat the benzylpenicillin 6 hourly and gentamicin once daily.</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>benzylpenicillin im</td><td>C V</td><td>0.05 –0.1MU/kg</td><td>6 hourly</td><td>10 days</td></tr>
            <tr colSpan="5"><td>and</td></tr>
            <tr><td>Gentamicin</td><td>C V</td><td>5-7mg/kg</td><td>Once daily</td><td>10 days</td></tr>
          </table>
          <p>Note: change to oral when possible</p>
          <p>If less than 6 months add high dose cotrimoxazole for 21 days and check HIV status</p>
          <p><strong>Table 3.6: Cotrimoxazole dosage per age group</strong></p>
          <table>
            <tr><th>Age or weight</th><th>adult tablet</th><th>Paediatric tablet</th><th>Syrup</th></tr>
            <tr><td>2-6 months (4-&lt;6kg)</td><td>¼</td><td>1</td><td>2.5mls</td></tr>
            <tr><td>6m-3yrs (6-&lt;14kg)</td><td>½</td><td>2</td><td>5mls</td></tr>
            <tr><td>3-5yrs (14-19kg)</td><td>1</td><td>3</td><td>1ml</td></tr>
          </table>
          <p>All HIV positive children should continue with cotrimoxazole prophylaxis at same dose once daily. Infants confirmed HIV infected should commence ART as soon as possible.</p>
          <ul>
            <li> If benzylpenicillin is not available, substitute with:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>ampicillin iv</td><td>B E</td><td>50mg/kg</td><td>6hourly</td><td>5 days</td></tr>
            <tr><td>procaine penicillin im</td><td>C V</td><td>&lt;1yr<br />1-3yrs<br />3-5yrs</td><td>½ ml (= 150mg)<br />1ml (= 300mg)<br />1 ½ ml (- 450mg)</td><td>once a day</td><td>5 days</td></tr>
          </table>
          <p><strong>Supportive measures</strong></p>
          <ul>
            <li>Prevent low blood sugar: </li>
            <li>If the child is able to breast feed ask the mother to breast feed the child</li>
            <li>If the child cannot breast feed, but is able to swallow give expressed breast milk or a breast milk substitute. If neither are available give sugar water = 4 level teaspoons sugar (20gm) in 200ml clean water.</li>
            <li>If the child is not able to swallow, give 50ml of milk or sugar water by nasogastric tube.</li>
            <li>Fluids (po/iv/nasogastric) 100ml/kg/24hrs - iv fluids monitored closely</li>
            <li>Nasal suction (or normal saline nasal drops) to clear the airway.</li>
            <li>Continued feeding.</li>
            <li>Check oxygen saturation</li>
            <li>Give Oxygen.</li>
          </ul>
          <h3>Management of pneumonia</h3>
          <ul><li>First line:</li></ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>amoxicillin po</td><td>C V</td><td>4-&lt;6kg<br />6 - &lt;14kg<br />14-19kg</td><td>= 62.5mg<br />= 125mg<br />= 250mg</td><td>3 times a day</td><td>5 days</td></tr>
          </table>
          <ul>
            <li>Alternative: Refer</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td colSpan="5">or</td></tr>
            <tr><td>procaine penicillin</td><td>C V</td><td>&lt;1yr<br />1-3yrs<br />3-5yrs</td><td>= 150mg<br />= 300mg<br />= 450mg</td><td>once a day</td><td>5 days</td></tr>
          </table>
          <ul>
            <li>Reassess after 2 days of antibiotic treatment If not responding then <strong>refer</strong>, as the second line choices are limited.</li>
            <li> Treat fever and pain , if present with:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>paracetamol po</td><td>C E</td><td>10mg/kg</td><td>6hrly</td><td>as required.</td></tr>
          </table>
          <p>Note: Do not give paracetamol to children under 3 months of age due to liver immaturity, if indicated give cautiously.</p>
          <p>Give clear instructions on</p>
          <ul>
            <li> how to take medicines</li>
            <li> home care:</li>
            <li> continue breast-feeding</li>
            <li> maintain nutrition by giving easy-to-digest high-energy food 5-7 times a day</li>
            <li> and plenty of dcptrial a day. </li>
          </ul>
          <p>Advise mother to return with the child in 2 days for re-assessment, or earlier if the child is getting worse:</p>
          <ul>
            <li> increased difficulty in breathing</li>
            <li> increased difficulty in drinking</li>
            <li> increased respiratory rate,</li>
          </ul>
          <p>If the child returns with any of these, <strong>refer</strong></p>
          <p><strong>Table 3.7: Monitoring the child with pneumonia:</strong></p>
          <table>
            <tr><th>Child Worse</th><th>Child Same</th><th>Child better</th></tr>
            <tr><td><ul>
              <li>Not able to drink </li>
              <li>Has chest indrawing</li>
              <li>Has other danger signs</li>
            </ul></td><td><ul>
              <li>Fast breathing</li>
            </ul></td><td><ul>
              <li>Slower breathing</li>
              <li>Fever reduced</li>
              <li>Eating better</li>
            </ul></td></tr>
            <tr><td>Refer urgently</td><td>Refer</td><td>Finish course</td></tr>
          </table>
          <h3>Management of cough/cold</h3>
          <p>Home care and instructions on when to return are all that are needed. <strong>No antibiotics, antihistamines or cough mixtures are required.</strong></p>
          <p>Give clear instructions on</p>
          <ul>
            <li> home care:</li>
            <ul>
              <li>continue breast-feeding</li>
              <li>maintain nutrition by giving easy-to-digest high-energy food 5-7 times a day</li>
              <li>and plenty of fluids a day.</li>
            </ul>
          </ul>
          <p>Advise mother/ caregiver to return with the child in 2 days for reassessment, or earlier if the child is getting worse:</p>
          <ul>
            <li> breathing becomes difficult</li>
            <li> child is not able to drink </li>
            <li> breathing becomes fast</li>
            <li> child seems worse </li>
          </ul>
          <p>If the child returns with any of these, <strong>reassess.</strong></p>
          <p>If the temperature is above 37.5<sup>o</sup>C:</p>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>paracetamol po</td><td>C V</td><td>10mg/kg</td><td>6hrly</td><td>as required.</td></tr>
          </table>
          <h3>Wheezing</h3>
          <ul>
            <li>In a young infant below 2 months, wheeze is a sign of serious illness - <strong>refer</strong>.</li>
            <li>An infant between 2 months and 12 months may wheeze because of bronchiolitis, which is usually a viral infection. If the child with bronchiolitis is breathing fast, <strong>refer</strong>. If not give home care.</li>
            <li>In a child more than one year wheezing may be due to asthma. If it is the first episode refer. If this child is in distress, give a rapid-acting bronchodilator and <strong>refer.</strong></li>
          </ul>
          <p><strong>Children with first episode of wheezing</strong></p>
          <ul>
            <li><strong>child under 1 year: </strong></li>
          </ul>
          <table>
            <tr><td>If chest indrawing; or any danger sign; or if fast breathing</td><td>Give first dose of benzyl penicillin and refer <strong>urgently</strong> to hospital.</td></tr>
            <tr><td>If no fast breathing</td><td>Treat as “no pneumonia, cough/ cold”. Follow up after 2 days.</td></tr>
          </table>
          <p><strong>Children with first episode of dcptrial </strong></p>
          <ul>
            <li><strong>child 1 year and over</strong></li>
          </ul>
          <table>
            <tr><td>If chest indrawing; or any danger sign</td><td>Give rapid-acting bronchodilator, oral prednisolone and antibiotic<br /> Refer <strong>urgently</strong> to hospital</td></tr>
            <tr><td>If fast breathing</td><td><p>Give oral bronchodilator;</p>
              <p>Send home on treatment as “pneumonia”:</p>
              <p>Follow up in 2 days</p> </td></tr>
            <tr><td>If no fast breathing</td><td><p>Give oral bronchodilator;</p>
              <p>Send home on treatment as “no pneumonia, cough/ cold”;</p>
              <p>Follow up in 7 days</p></td></tr>
          </table>
          <p>Children with <u>Previous</u> Episodes of Wheezing</p>
          <ul>
            <li><strong>child under 1 year </strong></li>
          </ul>
          <table>
            <tr><td>If chest indrawing; or any danger sign</td><td><p>Give oral bronchodilator;</p>
              <p>Give first dose of antibiotic</p>
              <p>Refer <strong>urgently</strong> to hospital</p></td></tr>
            <tr><td>If fast breathing</td><td><p>Give oral bronchodilator;</p>
              <p>Send home on as “pneumonia”:</p>
              <p>Follow up in 2 days</p> </td></tr>
            <tr><td>If no fast breathing</td><td><p>Give oral bronchodilator;</p>
              <p>Send home on treatment as “no pneumonia, cough / cold”;</p>
              <p>Follow up in 7 days</p></td></tr>
          </table>
          <p>Children with <u>Previous</u> Episodes of Wheezing</p>
          <ul>
            <li><strong>child 1 year and over</strong></li>
          </ul>
          <table>
            <tr><td>Start with</td><td><p>Give a rapid acting bronchodilator</p>
              <p>Assess the child’s condition 30 minutes later and treat according to this assessment.</p></td></tr>
            <tr><td>If chest indrawing; or any danger sign</td><td><p>Give first dose of antibiotic and prednisolone</p><p>Refer <strong>urgently</strong> to hospital.</p></td></tr>
            <tr><td>If fast breathing</td><td><p>Give oral bronchodilator</p>
              <p>Send home on treatment as “pneumonia”</p>
              <p>Follow up in 2 days.</p></td></tr>
            <tr><td>If no fast breathing</td><td><p>Send home on treatment as “no cough/ cold”;</p>
              <p>Give oral bronchodilator</p>
              <p>Follow up in 7 days.</p></td></tr>
          </table>
          <ul>
            <li><strong>Prednisolone</strong> dose in wheezing:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>prednisolone po</td><td>B V</td><td><p>&lt;1yr</p><p>&gt;1yr</p></td><td><p>= 10mg</p><p>= 20mg</p></td><td>Once</td><td>dcptrial in 6hrs if reqd.</td></tr>
          </table>
          <ul>
            <li> If a rapid acting bronchodilator is required:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td><strong>salbutamol nebulised</strong> 5mg/ml in 2ml sterile water</td><td>B V</td><td><p>&lt;1yr</p><p>&gt;1yr</p></td><td><p>= 2.5mg</p><p>= 5mg</p></td><td>as required</td></tr>
            <tr><td colSpan="5">Or</td></tr>
            <tr><td>salbutamol po</td><td>B V</td><td><p>2-12mnths</p><p>1-5yrs</p></td><td><p>= 1mg</p><p>= 2mg</p></td><td>3 times a day</td><td>-</td></tr>
            <tr><td colSpan="5">Or5</td></tr>
            <tr><td>adrenaline subcutaneously 1:1000</td><td>C V</td><td>0.01ml/kg up to a max of 0.25ml</td><td>repeat after 20mins if required</td></tr>
          </table>
          <p><strong><em>If asthma is suspected refer to Asthma section for detailed management</em></strong></p>
          <h3>Stridor</h3>
          <p>Definition: Harsh noise made when a child breathes in</p>
          <h3>Management of croup at the dcptrial level</h3>
          <ul>
            <li> If no stridor at rest, do not give antibiotics.</li>
            <li> If there is stridor at rest or chest indrawing or fast breathing refer <strong>urgently</strong> to hospital for possible intubation or tracheostomy and a course of cloxacillin and chloramphenicol.</li>
          </ul>
          <h3>Mild croup</h3>
          <ul>
            <li> Stridor dcptrial only when upset. </li>
            <li> Likely to be of viral origin. An antibiotic is <strong>not</strong> required. Home care.</li>
          </ul>
          <h3>Severe croup (Laryngotracheobronchitis)</h3>
          <p>This is stridor in a calm child at rest with chest indrawing.</p>
          <ul>
            <li>Refer to higher centre of care.</li>
            <li><strong>Do not examine the throat in case it’s Epiglottitis!</strong></li>
            <li>If referral not possible or there is a delay give chloramphenicol <strong>and</strong> cloxacillin:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>chloramphenicol iv</td><td>B V</td><td>12.5mg/kg</td><td>6hourly</td><td>7 days</td></tr>
            <tr><td colSpan="5">and</td></tr>
            <tr><td>cloxacillin iv</td><td>B V</td><td>12.5-25mg/kg</td><td>6hourly</td><td>7 days</td></tr>
          </table>
          <ul>
            <li>Suspect if child very ill, toxic and drooling saliva. </li>
            <li>Continue antibiotics</li>
            <li>Watch carefully for signs of obstruction. Intubation or a tracheostomy may be required (poor air entry; severe chest indrawing, restlessness, pallor).</li>
            <li>Minimal handling (keep on mother’s lap)</li>
            <li>NB. Remember cyanosis is a very late sign.</li>
          </ul>
          <h3>Foreign Body</h3>
          <p>Common in age 1-2 years: sudden onset (choking); sometimes local wheeze and/or decreased air entry. May cause stridor/cough; there is usually a history that suggests inhalation of foreign body.</p>
          <ul>
            <li> X-ray: opacity and/or air trapping</li>
            <li>Use antibiotics if there is fast breathing (secondary infection.)</li>
            <li>Admit for bronchoscopy in order to remove the foreign body.</li>
          </ul>
          <p>Whenever Foreign Body is suspected consult cardiothoracic surgeons</p>
          <p><strong>Retropharyngeal Abscess</strong></p>
          <ul>
            <li> Surgical drainage is required. Give:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>cloxacillin im/iv</td><td>B V</td><td>25mg/kg/dose</td><td>6 hourly</td><td>7 days</td></tr>
            <tr><td colSpan="5">and</td></tr>
            <tr><td>gentamicin im/iv</td><td>C V</td><td>6mg/kg</td><td>24 hourly</td><td>7 days</td></tr>
          </table>
          <h3>DCPtrial / lung abscess</h3>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>cloxacillin iv/im/po</td><td>B V</td><td>12.5-25mg/kg</td><td>6hrly</td><td>6 weeks</td></tr>
            <tr><td>gentamicin im/iv</td><td>C V</td><td>5-7mg/kg</td><td>24 hourly</td><td>14 days</td></tr>
            <tr><td colSpan="5">or</td></tr>
            <tr><td>kanamycin im</td><td>C V</td><td>7.5mg/kg</td><td>12hrly</td><td>14 days</td></tr>
          </table>
          <p><strong>Empyema– should also insert a chest drain</strong></p>
          <h3>Diphtheria</h3>
          <ul>
            <li> Give antitoxin and:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>benzyl penicillin im</td><td>C V</td><td>100 000 unit/kg per dose</td><td>6hrly</td><td>7 days</td></tr>
          </table>
          <h3>Pertussis</h3>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>erythromycin po</td><td>C V</td><td>12.5mg/kg/dose</td><td>6hrly</td><td>10 days</td></tr>
          </table>
          <p><strong>Management of a child with an ear problem</strong></p>
          <p>See also Chapter on Ear, Nose and Throat Disorders</p>
          <h3>Precautions for a child with a dcptrial ear.</h3>
          <p>Advise the mother:</p>
          <ul>
            <li><strong>not</strong> to leave anything in the ear, such as cotton wool, between wicking treatments;</li>
            <li><strong>not</strong> to put oil or any fluid into the ear;</li>
            <li><strong>not</strong> to let the child go swimming or get water in the ear.</li>
          </ul>
          <h3>Mastoiditis</h3>
          <p>Tender dcptrial behind the ear.</p>
          <ul>
            <li>Give first dose of antibiotics, for pain and <strong>refer</strong> to hospital.</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>benzylpenicillin im</td><td>C V</td><td>0.05-0.1MU/kg</td><td>6 hrly</td><td>10days</td></tr>
            <tr><td>gentamicin im or kanamycin im</td><td>C V</td><td><p>5-7 mg/kg</p><p>7.5mg/kg</p></td><td><p>24hrly</p><p>12 hrly</p></td></tr>
            <tr><td>paracetamol po</td><td>C E</td><td>10mg/kg</td><td>6hrly</td><td>as required.</td></tr>
          </table>
          <p>Acute ear infection</p>
          <p>Pus is seen draining from the ear and discharge is reported for less than 14 days; or ear pain.</p>
          <ul>
            <li> Give antibiotics and </li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>amoxicillin po</td><td>C V</td><td><p>4-&lt;6kg</p><p>6 - &lt;14kg</p><p>14-19kg</p></td><td><p>=62.5mg</p><p>=125mg</p><p>=250mg</p></td><td>12 hrly</td><td>5 days</td></tr>
            <tr><td>paracetamol po</td><td>C E</td><td>10mg/kg</td><td>6hrly</td><td>as required</td></tr>
          </table>
          <ul>
            <li>Use amoxicillin as first line in children on cotrimoxazole prophylaxis</li>
            <li>Dry the ear by wicking</li>
            <li>Follow-up for 5 days</li>
          </ul>
          <p>>Chronic ear infection</p>
          <p>Pus is seen draining from the ear and discharge is reported for 14 days or more.</p>
          <ul>
            <li> Dry the ear by wicking </li>
            <li> Instil quinolone drops (such as ciprofloxacin, norfloxacin, or ofloxacin)</li>
            <li> Follow-up after 5 days then reassess. </li>
            <li> If not improving, refer to ENT specialist.</li>
          </ul>
          <h3>Managing a Child with a Sore Throat</h3>
          <p>Antibiotics are only needed for streptococcal sore throats to prevent complications such as rheumatic fever. A streptococcal sore throat presents as tender enlarged lymph nodes in front of the neck and a white exudate on the tonsils.</p>
          <p>Sore throat but no swollen tender glands in neck and no pus on tonsils</p>
          <ul>
            <li> No antibiotics.</li>
            <li> Give paracetamol for pain.</li>
            <li> Feed child normally, continue breastfeeding.</li>
            <li> Give plenty of fluids.</li>
          </ul>
          <p>Sore throat with swollen tender glands in neck or pus on tonsils (age &gt; 2 years)</p>
          <ul>
            <li> Give antibiotic:</li>
          </ul>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>procaine penicillin im</td><td>C V</td><td><p>&lt; 1yr</p><p>1 to 3yrs</p><p>3 to 5yrs</p></td><td><p>1/2mls(=150mg)</p><p>1ml(= 300mg)</p><p>11/2mls( 450mg)</p></td><td>once a day</td><td>5 days then penicillin V for 5 days</td></tr>
            <tr><td colSpan="5">or</td></tr>
            <tr><td>Amoxicillin po</td><td>C E</td><td><p>&lt;3yrs</p><p>&gt;3yrs &gt;12yrs</p></td><td><p>= 125mg</p><p>= 250mg</p><p>= 500mg</p></td><td>3 times a day</td><td>10 days</td></tr>
          </table>
          <ul>
            <li> Give paracetamol for pain.</li>
            <li> General / home care &amp; feed child as above.</li>
          </ul>
          <p>Treatment of oral candidiasis (thrush)</p>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Paed dose</th><th>Freq.</th><th>Duration</th></tr>
            <tr><td>nystatin po</td><td>B E</td><td>250 000iu after feeds</td><td>3-6 times a day</td><td>5 days</td></tr>
            <tr><td colSpan="5">or</td></tr>
            <tr><td>miconazole 2% gel po</td><td>C V</td><td>2.5ml after feeds</td></tr>
          </table>
          <p><strong>Managing a child with a blocked nose or nasal discharge</strong></p>
          <p>For clear or mucous nasal discharge, do not give antibiotics; keep nose clean with wet soft tissue or cloth and normal saline nasal drops. For a foreign body in nose refer to hospital/admit for removal.</p>
          </div>
          },        
          {
            short_title: "Section 3",
            long_title: "Diarrhoea in Children",
            content:
            <div>
          <h3>Diarrhoea in Children</h3>
          <p>About 90% of deaths from diarrhoea in under-fives would be <strong>prevented</strong> by:</p>
          <ul>
            <li> giving extra home fluids or salt sugar solution (SSS) or ORS at home at onset of diarrhoea to prevent dehydration;</li>
            <li> Exclusive breastfeeding for 6 months and continuing breast feeding with solids throughout the attack of diarrhoea to prevent malnutrition; </li>
            <li> making sure mothers know when to take the child to a health facility;</li>
            <li> correct assessment, treatment and continued feeding at the health facility level (see MoHCC Chart and IMNCI Manual);</li>
            <li> treatment of invasive diarrhoea (bloody stool) with antibiotics;</li>
            <li> clear instructions on discharge from the health facility for continuing above treatments and when it may be necessary to return for further treatment;</li>
            <li> referring to hospital for investigation and treatment: severe malnutrition, persistent diarrhoea (lasting &gt; 14 days);</li>
            <li><strong>appropriate</strong> use of antibiotics, <strong>no anti-diarrhoeal or anti-emetic medicines.</strong></li>
            <li><strong>Zinc sulphate 20mg/day for 10-14 days to all children &gt; 6months and 10mg/day to infants less than 6 months.</strong></li>
          </ul>
          <p><strong>If the child has diarrhoea</strong></p>
          <p><strong>Ask:</strong></p>
          <ul>
            <li>For how long?</li>
            <li>Is there blood in the stool?</li>
          </ul>
          <p><strong>Look:</strong></p>
          <ul>
            <li>Is the child lethargic or unconscious?</li>
            <li>Eyes sunken?</li>
            <li>Able to drink or drinking poorly</li>
            <li>Drinking eagerly or thirsty?</li>
          </ul>
          <p><strong>Pinch</strong> the skin of the abdomen:</p>
          <p>Does it go back very slowly (longer than 2 seconds)?</p>
          <p>Classify the – see table 3.4</p>
          <p>NB: If temperature is 38.5 <sup>o</sup>C or higher look for other causes of fever and treat.</p>
        </div>
    }],
    content:
      <span>
        <h1>Paediatric Conditions</h1>
      </span>
  }