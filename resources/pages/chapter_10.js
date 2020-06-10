import React from 'react';

export let chapter_ten = {
    short_title: "Chapter 10",
    long_title: "Tuberculosis",
    subsections: [{
      short_title: "Section 1",
      long_title: "General Notes",
      content:
        <div>
          <h2>General Notes</h2>
          <p>Tuberculosis is a chronic infectious, debilitating disease, caused by Mycobacterium tuberculosis. It is a public health problem and all cases must be notified to the Provincial/City Medical Director in terms of the Public Health Act. Due to the association between TB and HIV infection, the prevalence of TB is increasing, and patients are often more seriously ill than before.</p>
          <h2>Control of Tuberculosis &dash; TB Policy</h2>
          <p><em>For more information on National Policy and the organisation of the TB services refer to the Ministry of Health &amp; Child Care’s ZIMBABWE TUBERCULOSIS CONTROL PROGRAMME MANUAL.</em></p>
          <p>The essential points of the TB policy are:</p>
          <ul>
            <li>Sputum microscopy for diagnosis and follow up provided free of charge in the public health sector</li>
            <li>Short-course chemotherapy provided free of charge in the public health sector</li>
            <li>Treatment of Drug Resistant TB(DRTB) provided for free of charge in the public sector</li>
            <li><strong>TB services available at all levels of the health delivery system, being integrated into the primary health care system to ensure efficient case finding, particularly for sputum smear positive patients</strong></li>          <li>Collaborative TB/HIV activities at all levels</li>
          </ul>
          <p>An important emphasis of the TB programme is the <strong>direct observation of treatment (DOTS)</strong>, which means that a treatment supervisor watches the patient actually swallowing the tablets. A supervisor can either be a healthcare worker or a trained member of the community.</p>
          <p>TB control is administered in a standardised way from the Central level to Health Centre level. Within this system notification, registration, record keeping and contact tracing activities in addition to treatment are carried out. It is essential that all patients requiring TB treatment be referred for management in the National TB Programme.</p>
          <p><strong><em>TB fixed dose combinations are to be at all levels from C through to A. Single formulations’ level of availability is B level medicines. TB medicines are accorded V level of priority.</em></strong></p>
        </div>
    },
    {
      short_title: "Section 2",
      long_title: "Prevention",
      content:
        <span>
          <h2>Prevention</h2>
          <h3>Primary Prevention</h3>
          <ul>
            <li>BCG vaccination is given at birth or at first dcptrial with the child after birth (except in babies with clinical signs of HIV infection and/or in infants born to a mother with sputum positive TB).</li>
            <li><em>BCG vaccine should be given to all babies, even those born to mothers known to be HIV positive.</em>
              <ul>
                <li>BCG is given intradermally on the right upper arm, above the insertion of the deltoid muscle.</li>
              </ul>              
            </li>
            <li> No booster dose should be given.</li>
          </ul>
          <small><em>The batch number of the vaccine and the date must be recorded on the child’s health card. Dosage is as recommended by EPI Programme (see the chapter on Immunisation).</em></small>
          <small><em>Problems associated with BCG vaccination remain uncommon and are mainly due to faulty technique.</em></small>
          <p>Abscesses or ulcers should be treated with local hygienic care. Abscesses should be <span className="underline">aspirated</span> not incised. Secondary infections can be treated with antibiotics. Non-healing ulcers, (ulcers of duration &gt; 8 weeks) or regional lymphadenopathy can be treated with:</p>
          <table>
            <tbody>
              <tr><th>Medicine</th><th>Codes</th><th>Dose</th><th>Frequency</th><th>Duration</th></tr>
              <tr><td>isoniazid po</td><td>B V</td><td>10mg/kg</td><td>once a day</td><td>2 months</td></tr>
            </tbody>
          </table>
          <h3>Secondary Prevention</h3>
          <p>An infant born to a mother with sputum positive TB should not be given BCG at birth</p>
          <ul>
            <li> Give the child isoniazid 10mg/kg day prophylaxis for two months</li>
            <li> After two months perform a mantoux test.
              <ul>            
                <li> If the Mantoux test is positive give full TB treatment. </li>
                <li> If the Mantoux test is negative continue with isoniazid prophylaxis for four more months.</li>
                <li> Follow with BCG vaccination if not HIV infected</li>
              </ul>
            </li>
          </ul>
          <p>If parents are found to be sputum positive and the child has no signs of active TB, check the child’s BCG status and vaccinate if not already done.</p>
          <p>In addition give prophylaxis for 6 months to children less than three years of age:</p>
          <table>
            <tbody>
              <tr><th>Medicine</th><th>Codes</th><th>Paed Dose</th><th>Frequency</th><th>Duration</th></tr>
              <tr><td>isoniazid po</td><td>B V</td><td>10mg/kg</td><td>once a day</td><td>6 months</td></tr>
            </tbody>
            <caption>Note: For and treatment in <strong>neonates</strong> give isoniazid 5mg/kg/day</caption>     
          </table>
          <p>Prevent further transmission of tuberculosis by health education and counselling on the importance of completing TB treatment, contact tracing, case finding and prevention of HIV infection.</p>
          <p>IPT for HIV positive patients in whom active TB has been excluded, refer to IPT under HIV related diseases and National TB Guidelines</p>
        </span>
    },
    {
      short_title: "Section 3",
      long_title: "Case Management",
      content:
        <span>
          <h2>Case Management</h2>
          <h3>Diagnosis</h3>
          <h4>Clinical Diagnosis of TB</h4>
          <p>The presence of pulmonary tuberculosis should be suspected in individuals presenting with one or more of the following complaints:</p>
          <ul>
            <li>Cough for 2 weeks or longer</li>
            <li>Production of sputum, which may be bloodstained</li>
            <li>Loss of appetite</li>
            <li>Night sweats</li>
            <li>Fever</li>
            <li>Loss of weight</li>
            <li>Shortness of breath</li>
          </ul>
          <h5>Sputum</h5>
          <p>The diagnosis of TB is made by demonstrating alcohol acid-fast bacilli (AAFB) in the sputum by direct smear microscopy (DSM). DSM is repeated at the end of the intensive and continuation phases to confirm sputum conversion and cure.</p>
          <p>Due to the concerns of medicine resistance the following patients <strong>MUST</strong> submit sputum specimens for Gene Xpert test, culture and medicine sensitivity testing to the TB Reference Laboratory</p>
          <ul>
            <li>All relapses</li>
            <li>Patients on category 1 treatment who are sputum positive at 3/5 months</li>
            <li>Patients on category 2 treatment who are sputum positive at 3/4 months (at end of prolonged intensive phase).</li>
            <li>Patients on category 2 treatment who are sputum positive at the end of treatment</li>
            <li>Patients who are sputum-smear positive and have been in contact with MDR-TB case.</li>
            <li>Gene-Xpert for all HIV positive patients</li>
            <li>Residence in DRTB high burden zones</li>
            <li>Return after treatment default</li>
          </ul>
          <h5>Chest X-Rays</h5>
          <p><strong>Indications for chest x-rays</strong></p>
          <ul>
            <li>A child suspected of TB </li>
            <li>HIV positive patient who is sputum negative</li>
            <li>Non-response to broad-spectrum antibiotics for correct duration in sputum negative and HIV negative patient</li>
            <li>Non-response to broad spectrum antibiotics in a sputum negative patient.</li>
            <li>When suspecting complications, e.g., pneumothorax, or pleural effusion</li>
            <li>When frequent and severe occurs </li>
            <li>When other lung diseases are suspected by the medical officer</li>
            <li>Pericardial effusion</li>
          </ul>
          <p>Chest x-rays should <strong className="underline">NOT</strong> be used for diagnosing pulmonary TB. In sputum positive patients a chest x-ray is not necessary.</p>
          <small>Note: In the presence of clinical improvement, it is not necessary to monitor the response of pulmonary TB to treatment by chest x-rays </small>
          <h5>Tuberculin Testing</h5>
          <p>Use Mantoux test only:</p>
          <table>
            <tr><th>Medicine</th><th>Codes</th><th>Dose</th><th>Frequency</th><th>Duration</th></tr>
            <tr><td>tuberculin, purified (PPD) 1:1000 intradermal</td><td>B E</td><td>0.1ml (=5TU)</td><td>&mdash;</td><td>&mdash;</td></tr>
          </table>
          <p>Examine induration at 48-72 hours.</p>
          <ul>
            <li> A positive Mantoux (person with normal immunity: induration &gt; 10 mm, person with defective immunity: induration &gt;6 mm) may indicate active infection (especially if strongly positive), previous infection or previous BCG.</li>
            <li>Absence of a response does not exclude TB because individuals with HIV may not have sufficient immunity for a positive skin test despite active TB.
              <ul>
                <li> If a child under 3 years of age has <span className="underline">not</span> had BCG, the Mantoux test may be useful.</li>
              <li> All TB suspects should be offered HIV counselling and testing (Provider initiated testing and counselling i.e. PITC)at the same facility where the sputum is examined.</li>
            </ul>
            </li>
          </ul>
        </span>
    },
    {
      short_title: "Section 4",
      long_title: "Medicine Regimens for Tuberculosis",
      content:
        <span>
          <h2>Medicine Regimens for Tuberculosis</h2>
          <p>Two main treatment categories, Category 1 and Category II are now used in Zimbabwe for medicine sensitive TB. The regimens consist of a combination of five first line medicines. These medicines are available as oral Fixed Dose Combination (FDC)and an injectable, streptomycin.</p>
          <p>The intention of these combination tablets is to improve compliance by reducing the number of tablets a patient has to take, and to reduce the possibility of medicine resistance developing. The number of FDC tablets is determined by a weight range for each patient at the start of treatment</p>
          <ul>
            <li>Treatment is the same for HIV infected people as for non-HIV infected.</li>
          </ul>
          <p>There are specific differences between regimes for adults and children in each category.</p>
          <p><strong className="underline">NOTE: If any signs of a reaction occur, the treatment should be stopped immediately and the patient seen by a doctor.</strong></p>
          <p><strong>Key to Medicine Abbreviations</strong></p>
          <table>
            <tr><td>H= isoniazid</td><td>Z/PZA= pyrazinamide</td></tr>
            <tr><td>R= rifampicin</td><td>S= streptomycin</td></tr>
            <tr><td>E= ethambutol</td><td></td></tr>
          </table>
          <p><em><strong>No streptomycin should be given to children less than 12 years old except for meningitis, or to pregnant women, or those whose body weight is below 30kgs)</strong>. Recent evidence has shown that it is safe to use ethambutol in children as it has less ocular toxicity in children of all ages than previously thought. Thus ethambutol has been reintroduced in paediatric regimens.</em> WHO (2006). Ethambutol efficacy and toxicity: literature review and recommendations for daily and intermittent dosage in children,</p>
          <h3>Treatment of new cases of TB</h3>
        </span>
    },
    {
      short_title: "Section 6",
      long_title: "Category I",
      content:
        <span>
          <h2>Category I</h2>
          <p>All <strong>new cases</strong> of TB regardless of site, bacteriology or severity</p>
          <p><strong>Adults:</strong></p>
          <p>.Intensive phase: 2 months HRZE (DOT)</p>
          <p>Continuation phase: 4 dcptrial HR (DOTS) OR (6 months HR in TB of meninges, bone, joint, pericardium, disseminated spinal disease)</p>
          <p><strong>2HRZE/4HR</strong> (DOT)</p>
          <p><em></em></p>
          <p><strong>
            <em>The use of the combination of and ethambutol (HE) in the continuation phase has been phased out in Zimbabwe </em>
          </strong>.</p>
          <p><strong>Children</strong>:</p>
          <p> Intensive phase: Two months HRZE (DOT)</p>
          <p> Continuation phase: Four months HR (DOT) ( or 10HR for patients with TB of the meninges, bone joint, pericardium, military TB or TB spine)</p>
          <p>In children under 12 years, no streptomycin should be given except for TB meningitis.</p>
          <p>General notes: Category I</p>
          <p> In smear positive cases, repeat sputum smear exam at end of two months. If the sputum is still positive at the end of two months the extension of the intensive phase is no longer necessary. Start continuation phase irrespective of sputum results at end of two months.</p>
          <p> If the sputum is still smear positive at the end of two months repeat sputum smear exam at the end of month three. Sputum smear should be sent to the National TB Laboratory for culture and sensitivity testing if still smear positive after three months of treatment. A sputum sample should be collected for Gene Xpert test at the local laboratory.</p>
          <p> Sputum testing should be collected for Gene Xpert testing and another one sent to the National TB Laboratory for culture and sensitivity testing if still smear positive after five or six months of treatment. If the patient’s sputum remains smear positive after five months of treatment (treatment failure) Category II treatment should be commenced.</p>
          <p> Children weighing less than 11kg receive paediatric FDC HRZ plus additional isoniazid and ethambutol.</p>
          <p> Children weighing 11kg and above receive adult formulations and additional isoniazid.</p>
          <p> The total duration of treatment is six months.</p>
          <p> Children with tuberculous meningitis or pericarditis, disseminated or spinal disease with neurological complications should be given 10HR (continuous phase) i.e. 10 months of isoniazid and rifampicin under direct observation.</p>
          <p> Adults with TB of meninges, bone, joint, pericardium, disseminated, or spinal disease should be given 6 HR (continuous phase) i.e. 6 months of isoniazid and rifampicin under direct observation.</p>
          <h3><a>All previously treated cases of any form of TB</a>
          </h3>
        </span>
    },
    {
      short_title: "Section 7",
      long_title: "Category II",
      content:
        <span>
          <h2>Category II</h2>
          <p><strong>Adults:</strong></p>
          <p> Intensive phase: 2 SHRZE daily for two months followed by HRZE daily for one month</p>
          <p> Continuation phase: 5 HRE daily for 5 months [DOT]</p>
          <p><strong>Children:</strong></p>
          <p> Intensive phase: 3 months RHZE daily</p>
          <p> Continuation phase: 5 months of HRZ daily</p>
          <p>General notes: Category II</p>
          <p> Duration of TB Course: 8 months</p>
          <p> If at the end of the initial 3 months the sputum is smear negative or positive the continuation phase is started.</p>
          <p> If the sputum is smear positive at three months (12 weeks), take sputum for Gene Xpert,and for culture and DST. Start the continuation phase. Consult the District/Local MDR TB Team when DST results available. Further extension of the continuation phase will not increase the chances of cure.</p>
          <p><strong>
              <u>If a patient is still smear positive at the end of 4 dcptrial all medicines should be stopped for 3 days and a sputum specimen sent for Gene Xpert testing and another </u >
            <u></u >
            <u>sputum specimen sent</u >
            <u></u >
            <u>to the National TB Reference Laboratory(NTBRL) in Bulawayo or National Microbiology Reference Laboratory</u >
            <u></u >
            <u>in Harare(NMRL) for culture and susceptibility. The patient should then be started on the continuation phase.</u>
          </strong></p>
          <ul>
            <li> Patients who dcptrial smear positive after the end of the fully supervised continuation phase will derive no benefit from another re-treatment regimen. They are termed chronic TB cases and are at high risk for medicine resistant TB.
              Collect sputum for Gene Xpert as well as for culture and sensitivity.<strong>Refer to DR-TB guidelines</strong>
            </li>
          </ul>
          <h3><a>Drug Resistant TB (DR-TB)</a>
          </h3>
          <p>Drug resistant TB (DR-TB) is the presence of bacilli resistant to one or more anti-tuberculosis medicines and includes multidrug-resistant tuberculosis (MDR-TB) and extensively drug-resistant TB (XDR-TB).</p>
          <p>These are patients who remain (or again dcptrial smear positive) after completing a fully supervised re-treatment regimen.The management of MDR or XDRTB cases is problematic; health workers should consult the MDR TB team.</p>
          <p>Note: Although smear negative PTB and extra-pulmonary cases may also be treatment failures, relapses and DR-TB, this is a rare event and should be supported by pathological and /or bacteriological evidence.</p>
          <p><a><strong>MDR TB: Following preliminary results of rifampicin resistance by gene-xpert, patients must be put on standardised Category 4 treatment of MDR-TB whilst dcptrial for full DST results. </strong>
          </a></p>
          <h3><a>Fixed Dose Combination of Anti-TB Medicines</a>
          </h3>
          <p>The essential anti-TB medicines now come in fixed dose combinations (FDCs) such that each tablet has 2 (2-FDC), 3 (3-FDC),or 4 (4-FDC) medicines.</p>
          <p>Fixed dose combination tablets</p>
          <p>Fixed dose combination tablets improve compliance by reducing the number of tablets a patient has to take, and reduce the possibility of medicine resistance developing. The FDCs available in Zimbabwe are:</p>
          <ul>
            <li>Rifampicin, Isoniazid, Pyrazinamide and Ethambutol: (RHZE)</li>
            <li>Rifampicin, Isoniazid and Ethambutol: (RHE)</li>
            <li>Rifampicin and Isoniazid: (RH)</li>
          </ul>
          <p>The number of FDC tablets is determined by a weight range for each patient at the start of treatment and this is shown in the Table 10.1 to Table 10.8.</p>
          <p>Adverse Medicine Reaction</p>
          <p>Stop all TB medicines and assess. If necessary evaluate the liver function. Then reintroduce one medicine at a time, and build up gradually. Start with isoniazid at 25mg – the least likely to cause a reaction. When the required dose has been achieved without any reaction, another medicine should be re-introduced in a similar manner – slowly, increasing the dose daily.</p>
          <p>e.g Day 1 Isoniazid 25mg</p>
          <p>Day 2 Isoniazid 50mg</p>
          <p>Day 3 Isoniazid 100mg</p>
          <p>Day 4 Isoniazid 300mg</p>
          <p>Day 5 Isoniazid 300mg + Rifampicin 150mg</p>
          <p>Day 6 Isoniazid 300mg + Rifampicin 300mg</p>
          <p>Day 7 Isoniazid 300mg + Rifampicin 450mg, etc(Refer to the National TB Guidelines)</p>
          <p>TB and HIV Co-infection</p>
          <p>Refer to the current national ARV guidelines as well as the TB guidelines. Also refer to the ARV chapter in this EDLIZ</p>
          <p><strong>Recommended doses of TB medicines in Children</strong></p>
          <ul>
            <li>Rifampicin: 15 mg/kg/day (10 to 20 </li>
          </ul>
          <p>• Isoniazid: 10 mg/kg/day (10 to 15 mg/kg/day)</p>
          <p>• Pyrazinamide: 35 mg/kg/day (30 to 40 mg/kg/day)</p>
          <ul>
            <li>Ethambutol: 20 mg/kg/day (15 mg to 25 mg/kg/d).</li>
          </ul ><p><strong>Adults:</strong></p>
          <p> Intensive phase: 2 SHRZE daily for two months followed by HRZE daily for one month</p>
          <p> Continuation phase: 5 HRE daily for 5 months [DOT]</p>
          <p><strong>Children:</strong></p>
          <p> Intensive phase: 3 months RHZE daily</p>
          <p> Continuation phase: 5 months of HRZ daily</p>
          <p>General notes: Category II</p>
          <p> Duration of TB Course: 8 months</p>
          <p> If at the end of the initial 3 months the sputum is smear negative or positive the continuation phase is started.</p>
          <p> If the sputum is smear positive at three months (12 weeks), take sputum for Gene Xpert,and for culture and DST. Start the continuation phase. Consult the District/Local MDR TB Team when DST results available. Further extension of the continuation phase will not increase the chances of cure.</p>
          <p><strong>
              <u>If a patient is still smear positive at the end of 4 dcptrial all medicines should be stopped for 3 days and a sputum specimen sent for Gene Xpert testing and another </u >
            <u></u >
            <u>sputum specimen sent</u >
            <u></u >
            <u>to the National TB Reference Laboratory(NTBRL) in Bulawayo or National Microbiology Reference Laboratory</u >
            <u></u >
            <u>in Harare(NMRL) for culture and susceptibility. The patient should then be started on the continuation phase.</u>
          </strong></p>
          <ul>
            <li> Patients who dcptrial smear positive after the end of the fully supervised continuation phase will derive no benefit from another re-treatment regimen. They are termed chronic TB cases and are at high risk for medicine resistant TB.
              Collect sputum for Gene Xpert as well as for culture and sensitivity.
        <strong>Refer to DR-TB guidelines</strong>
            </li>
          </ul>
          <h3><a>Drug Resistant TB (DR-TB)</a>
          </h3>
          <p>Drug resistant TB (DR-TB) is the presence of bacilli resistant to one or more anti-tuberculosis medicines and includes multidrug-resistant tuberculosis (MDR-TB) and extensively drug-resistant TB (XDR-TB).</p>
          <p>These are patients who remain (or again dcptrial smear positive) after completing a fully supervised re-treatment regimen.
      The management of MDR or XDRTB cases is problematic; health workers should consult the MDR TB team.</p>
          <p>Note: Although smear negative PTB and extra-pulmonary cases may also be treatment failures, relapses and DR-TB, this is a rare event and should be supported by pathological and /or bacteriological evidence.</p>
          <p><a><strong>MDR TB: Following preliminary results of rifampicin resistance by gene-xpert, patients must be put on standardised Category 4 treatment of MDR-TB whilst dcptrial for full DST results. </strong>
          </a></p>
          <h3><a>Fixed Dose Combination of Anti-TB Medicines</a>
          </h3>
          <p>The essential anti-TB medicines now come in fixed dose combinations (FDCs) such that each tablet has 2 (2-FDC), 3 (3-FDC),
      or 4 (4-FDC) medicines.</p>
          <p>Fixed dose combination tablets</p>
          <p>Fixed dose combination tablets improve compliance by reducing the number of tablets a patient has to take, and reduce the possibility of medicine resistance developing. The FDCs available in Zimbabwe are:</p>
          <ul>
            <li>Rifampicin, Isoniazid, Pyrazinamide and Ethambutol: (RHZE)</li>
            <li>Rifampicin, Isoniazid and Ethambutol: (RHE)</li>
            <li>Rifampicin and Isoniazid: (RH)</li>
          </ul>
          <p>The number of FDC tablets is determined by a weight range for each patient at the start of treatment and this is shown in the Table 10.1 to Table 10.8.</p>
          <p>Adverse Medicine Reaction</p>
          <p>Stop all TB medicines and assess. If necessary evaluate the liver function. Then reintroduce one medicine at a time, and build up gradually. Start with isoniazid at 25mg – the least likely to cause a reaction. When the required dose has been achieved without any reaction, another medicine should be re-introduced in a similar manner – slowly, increasing the dose daily.</p>
          <p>e.g Day 1 Isoniazid 25mg</p>
          <p>Day 2 Isoniazid 50mg</p>
          <p>Day 3 Isoniazid 100mg</p>
          <p>Day 4 Isoniazid 300mg</p>
          <p>Day 5 Isoniazid 300mg + Rifampicin 150mg</p>
          <p>Day 6 Isoniazid 300mg + Rifampicin 300mg</p>
          <p>Day 7 Isoniazid 300mg + Rifampicin 450mg, etc(Refer to the National TB Guidelines)</p>
          <p>TB and HIV Co-infection</p>
          <p>Refer to the current national ARV guidelines as well as the TB guidelines. Also refer to the ARV chapter in this EDLIZ</p>
          <p><strong>Recommended doses of TB medicines in Children</strong></p>
          <ul>
            <li>Rifampicin: 15 mg/kg/day (10 to 20 </li>
          </ul>
          <p>• Isoniazid: 10 mg/kg/day (10 to 15 mg/kg/day)</p>
          <p>• Pyrazinamide: 35 mg/kg/day (30 to 40 mg/kg/day)</p>
          <ul>
            <li>Ethambutol: 20 mg/kg/day (15 mg to 25 mg/kg/d).</li>
          </ul >
        </span>
    },
    {
      short_title: "Section 8",
      long_title: "Daily Doses by Weight - Category I",
      content:
        <span>
          <h2>Daily Doses by Weight - Category I</h2>
          <p><strong>Table 10.1:</strong> Paediatric Intensive Phase weight band (2 months RHZE)</p>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin Isoniazid (H) Pyrazinamide (Z) 60/30/150mg</strong></p> </td><td><p><strong>Additional INH 100mg taB Ethambutol tabs 100mg</strong></p> </td></tr>
            <tr><td><p>3 - 5.9</p></td><td><p>1 ½ tabs</p></td><td><p>¼ tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>6 - 10.9</p></td><td><p>2 tabs</p></td><td><p>½ tab</p></td><td><p>2 tabs</p></td></tr>
          </table>
          <p><strong>Table 10.2:</strong> For children in the 11-30.9 kg weight band use adult kits with additional INH</p>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin Isoniazid (H) Pyrazinamide (Z Ethambutol tabs</strong></p>
              <p><strong>150mg:75mg:400mg:275mg</strong></p> </td><td><p><strong>Additional INH 100mg tab</strong></p> </td></tr>
            <tr><td><p>11 - 15.9</p></td><td><p>1 tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>16 - 20.9</p></td><td><p>2 tabs</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>21 - 30.9</p></td><td><p>2 tabs</p></td><td><p>2 tabs</p></td></tr>
          </table>
          <p><strong>Table 10.3:</strong> Paediatric Continuation Phase (RH) 4 months daily</p>
          <table>
            <tr><td><p><strong>Weight bands in kg </strong></p> </td><td><p><strong>Rifampicin Isoniazid 60mg/30mg</strong></p> </td><td><p><strong>Additional INH 100mg tab</strong></p> </td></tr>
            <tr><td><p>3 - 5.9</p></td><td><p>1 ½ tabs</p></td><td><p>¼ tab</p></td></tr>
            <tr><td><p>6 - 10.9</p></td><td><p>2 tabs</p></td><td><p>½ tab</p></td></tr>
          </table>
          <p><strong>Table 10.4:</strong> Continuation phase (RH) 4 months daily (except TB meningitis, TB spine where (RH) 10 months</p>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin Isoniazid</strong></p>
              <p><strong>150mg:75mg</strong></p> </td><td><p><strong>Additional INH 100mg tab </strong></p> </td></tr>
            <tr><td><p>11 - 15.9</p></td><td><p>1 tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>16 - 20.9</p></td><td><p>2 tabs</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>21 - 30.9</p></td><td><p>2 tabs</p></td><td><p>2 tabs</p></td></tr>
          </table >
          <p><strong>Table 10.5:</strong> New adult Number of FDC tablets per day for each Weight band (2RHZE/4HR)</p>
          <table>
            <tr><td rowspan="3">
              <p><strong>Regimen</strong></p >
              <p><strong>Patient’s Weight</strong></p> </td><td><p><strong>Initial phase (2 months)</strong></p> </td><td><p><strong>Continuation Phase (4 months)</strong></p> </td></tr>
            <tr><td><p><strong>2(RHZE) daily</strong></p> </td><td><p><strong>4(HR) daily</strong></p> </td></tr>
            <tr><td><p><strong>(Isoniazid 75mg+</strong></p>
              <p><strong>Rifampicin 150mg +</strong></p>
              <p><strong>Pyrazinamide 400mg +</strong></p>
              <p><strong>Ethambutol 275mg)</strong></p> </td><td><p><strong>(Isoniazid 75mg +</strong></p>
                <p><strong>Rifampicin 150mg)</strong></p>
              </td></tr>
            <tr><td><p>30 - 39 kg</p></td><td><p>2</p></td><td><p>1.5</p></td></tr>
            <tr><td><p>40 - 54 kg</p></td><td><p>3</p></td><td><p>2</p></td></tr>
            <tr><td><p>55 - 70 kg</p></td><td><p>4</p></td><td><p>3</p></td></tr>
            <tr><td><p>70 kg +</p></td><td><p>5</p></td><td><p>3</p></td></tr>
          </table >
        </span>
    },
    {
      short_title: "Section 9",
      long_title: "Daily Doses by Weight - Category II",
      content:
        <span>
          <h2>Daily Doses by Weight - Category II</h2>
          <p><strong>Table 10.6:</strong> Paediatric Intensive Phase 3 months (RHZE)</p>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin (R) Isoniazid (H) Pyrazinamide (Z) 60/30/150mg</strong></p> </td><td><p><strong>Additional INH 100mg taB Ethambutol (E) tabs 100mg</strong></p> </td></tr>
            <tr><td><p>3 - 5.9</p></td><td><p>1 ½ tabs</p></td><td><p>¼ tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>6 - 10.9</p></td><td><p>2 tabs</p></td><td><p>½ tab</p></td><td><p>2 tabs</p></td></tr>
          </table>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin (R) Isoniazid (H) Pyrazinamide (Z) Ethambutol (E) tabs</strong></p>
              <p><strong>150mg:75mg</strong></p>
              <p><strong>:400mg:275mg</strong></p> </td><td><p><strong>Additional INH 100mg tab</strong></p> </td></tr>
            <tr><td><p>11 -15.9</p></td><td><p>1 tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>16 - 20-.9</p></td><td><p>2 tabs</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>21 - 30.9</p></td><td><p>2 tabs</p></td><td><p>2 tabs</p></td></tr>
          </table>
          <p><strong>Table 10.7:</strong> Paediatric Continuation Phase 5 months (RHE)</p>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin(R) Isoniazid (H)</strong></p>
              <p><strong>60:30mg</strong></p> </td><td><p><strong>(E) tabs 400mg </strong></p> </td></tr>
            <tr><td><p>3 - 5.9</p></td><td><p>1 tab</p></td><td><p>1/4 tab</p></td></tr>
            <tr><td><p>6 - 10.9</p></td><td><p>2 tabs</p></td><td><p>1/2 tab</p></td></tr>
          </table>
          <table>
            <tr><td><p><strong>Weight bands in kg</strong></p> </td><td><p><strong>Rifampicin(R) Isoniazid (H) Ethambutol(E) tabs</strong></p>
              <p><strong>150mg:75mg:275mg</strong></p> </td><td><p><strong>Additional INH 100mg tab</strong></p> </td></tr>
            <tr><td><p>11 - 15.9</p></td><td><p>1 tab</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>16 - 20.9</p></td><td><p>2 tabs</p></td><td><p>1 tab</p></td></tr>
            <tr><td><p>21 - 30.9</p></td><td><p>2 tabs</p></td><td><p>2 tabs</p></td></tr>
          </table>
          <p><strong>Table 10.8:</strong> Category II : Retreatment in Previously treated adult</p>
          <table>
            <tr><td><p><strong>Regimen</strong></p>
            </td><td colspan="2"><p><strong>Initial Phase (3 months)</strong></p> </td><td><p><strong>Phase (5 months) </strong></p> </td></tr>
            <tr><td rowspan="2">
              <p><strong>Patient’s Weight</strong></p> </td><td colspan="2"><p>2(RHZE)S / 1(RHZE) daily</p></td><td><p>5HRE</p></td></tr>
            <tr><td><p>(Isoniazid 75 mg +</p>
              <p>Rifampicin 150mg + Pyrazinamide 400mg + Ethambutol 275mg)</p></td><td><p>5(HRE) daily</p>
                <p>Streptomycin (IM) 2 months</p></td><td><p>(Isoniazid 75 mg + Rifampicin 150 mg + Ethambutol 275mg)</p></td></tr>
            <tr><td><p>30 - 39 kg</p></td><td><p>2</p></td><td><p>0.50 g</p></td><td><p>2</p></td></tr>
            <tr><td><p>40 - 54 kg</p></td><td><p>3</p></td><td><p>0.75 g</p></td><td><p>3</p></td></tr>
            <tr><td><p>55 - 69 kg</p> </td><td><p>4</p></td><td><p>1 g*</p></td><td><p>4</p></td></tr>
            <tr><td><p>70 kg +</p></td><td><p>5</p></td><td><p>1 g*</p></td><td><p>5</p></td></tr>
          </table>
          <p> *0.75 g if 60 years or over.</p>
        </span>
    }],
    content:
      <span>
        <h1>Tuberculosis</h1>
      </span>
  }