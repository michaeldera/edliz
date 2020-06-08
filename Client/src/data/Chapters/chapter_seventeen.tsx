import React from 'react'
import {IChapter} from '../data'

export const chapter_seventeen: IChapter = {
    short_title: 'Chapter 17',
    long_title: 'Rheumatological and Joint Conditions',
    subsections: [
        {
            short_title: 'Section 1',
            long_title: 'Infections',
            content: (
                <span>
                    <h2>Infections</h2>
                    <p>
                        <strong>Septic arthritis , and Acute osteomyelitis </strong>
                    </p>
                    <p>
                        Surgical drainage is recommended in all cases presenting with a greater than 24 hours history.
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td colSpan={2}>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>cloxacillin iv</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>1-2g</p>
                            </td>
                            <td colSpan={2}>
                                <p>4 times a day</p>
                            </td>
                            <td>
                                <p>4-6 weeks</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>clindamycin iv</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>600mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>4-6 weeks</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        Culture and sensitivity should guide antibiotic choice where available. Erythrocyte
                        Sedimentation Rate (ESR) is useful in monitoring response. Duration of therapy may be reduced if
                        fever and toxicity have resolved, and if X-ray is normal. Switch to oral therapy when a good
                        response is achieved.
                    </p>
                    <p>
                        <strong>Chronic osteomyelitis</strong>
                    </p>
                    <p>Surgery is recommended. Antibiotics alone are not generally recommended.</p>
                    <p>
                        <strong>Compound fractures</strong>
                    </p>
                    <p>
                        General management as for simple fractures below. Careful debridement of the site is required.
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td colSpan={2}>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>cloxacillin iv</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>1-2g</p>
                            </td>
                            <td colSpan={2}>
                                <p>4 times a day</p>{' '}
                            </td>
                            <td>
                                <p>5 days</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>clindamycin iv</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>600mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>5 days</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <strong>Simple fracture</strong>
                    </p>
                    <p>
                        Pain relief. Splinting and reduction. Consider circulation to areas beyond the fracture site.
                        Nil by mouth at appropriate point in referral chain prior to manipulation under anaesthetic.
                    </p>
                    <p>Tuberculosis of bones - see chapter on Tuberculosis</p>
                    <p>Metastatic Bone Disease - see chapter on Pain</p>
                </span>
            ),
        },
        {
            short_title: 'Section 5',
            long_title: 'Back and Neck Pain',
            content: (
                <span>
                    <h2>Back and Neck Pain</h2>
                    <p>Exclude serious pathology (fractures, neurological complications, infection)</p>
                    <p>Acute pain:</p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td colSpan={2}>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>aspirin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>600mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>4 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>paracetamol po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>1gm</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>ibuprofen po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>200 -400mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>diclofenac po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25-50mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                    </table>
                    <p>Chronic pain:</p>
                    <p>Use the lowest effective dose analgesia with increased dosages for flare-ups.</p>
                </span>
            ),
        },
        {
            short_title: 'Section 6',
            long_title: 'Gout',
            content: (
                <span>
                    <h2>Gout</h2>
                    <p>Acute gout</p>
                    <p>
                        The possibility of septic arthritis should always be considered. Allopurinol should{' '}
                        <strong>not</strong> be given during or within three weeks following an acute attack unless if
                        patient is currently on it. Aspirin should be avoided. Use:
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>indomethacin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>50mg</p>
                            </td>
                            <td>
                                <p>4 times a day</p>
                            </td>
                            <td>
                                <p>first 24 hrs</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>
                                <p>then reduce by 25mg daily to</p>
                            </td>
                            <td>
                                <p>25mg</p>
                            </td>
                            <td>
                                <p>3 times a day</p>{' '}
                            </td>
                            <td>
                                <p>review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Or</p>
                            </td>
                            <td>
                                <p>
                                    <strong>colchicine po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>S</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>0.5-1mg</p>
                            </td>
                            <td>
                                <p>Up to 6 times a day</p>
                            </td>
                            <td>
                                <p>2 days</p>
                            </td>
                        </tr>
                    </table>
                    <p>Chronic gout</p>
                    <p>Treat acute attacks as they occur. Stop dcptrial diuretics, avoid dehydration.</p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>allopurinol po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>300mg</p>
                            </td>
                            <td>
                                <p>once a day</p>
                            </td>
                            <td>
                                <p>continual</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        Note: 300 mg allopurinol orally once daily is the average dose but some patients need more to
                        reduce the serum uric acid to normal levels.
                    </p>
                    <ul>
                        <li>
                            In the elderly patients, those on diuretics, or those with impaired renal function,
                            allopurinol should be started at the lower daily dose of 100 mg and increased cautiously if
                            necessary.
                        </li>
                    </ul>
                    <ul>
                        <li>Allopurinol should not be introduced during or immediately after an acute attack.</li>
                        <li>
                            During the period when allopurinol is being introduced an active drug for acute gout, like
                            colchicine or NSAIDs, should be used until a normal level of uric acid is attained:
                        </li>
                    </ul>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td colSpan={2}>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>colchicine po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>S</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>0.5mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>2 times a day</p>
                            </td>
                            <td>
                                <p>7 days</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>indomethacin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>7 days</p>
                            </td>
                        </tr>
                    </table>
                    <ul>
                        <li>
                            Concurrent anti-inflammatory therapy should be given for the first 3 months of allopurinol
                            therapy:
                        </li>
                    </ul>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td colSpan={2}>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>indomethacin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25-50mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>3 months</p>
                            </td>
                        </tr>
                    </table>
                    <p>Dietary management of gout</p>
                    <p>Choice of foods aims to control the amount of purine in the diet.</p>
                    <ul>
                        <li> Reduce weight (limit fats and refined carbohydrates).</li>
                        <li> Alcohol should be avoided or reduced drastically</li>
                        <li> Avoid dehydration.</li>
                    </ul>
                    <p>These foods should be avoided:</p>
                    <ul>
                        <li> offals, red meat especially goat meat.</li>
                    </ul>
                    <p>These foods are permissible:</p>
                    <ul>
                        <li> eggs, milk carbohydrates, fruit, vegetables, chicken and fish. </li>
                    </ul>
                </span>
            ),
        },
        {
            short_title: 'Section 7',
            long_title: 'Rheumatological Conditions',
            content: (
                <span>
                    <h2>Rheumatological Conditions</h2>
                    <p>
                        <strong>General Guidelines</strong>
                    </p>
                    <ul>
                        <li>
                            The first line treatment for most of these conditions is a non-steroidal anti-inflammatory
                            drug (NSAID). This group includes aspirin, indomethacin, diclofenac and ibuprofen, but does
                            NOT include paracetamol.
                        </li>
                        <li>
                            NSAID’s should be used cautiously in pregnancy, the elderly, and in patients with asthma
                        </li>
                        <li>NSAID’s should be avoided in patients with a history of peptic ulcer disease.</li>
                        <li>
                            Refer patients with serious rheumatic disease and peptic ulceration for specialist help.
                        </li>
                        <li>
                            Indomethacin, used as a bed time suppository, may be very useful to alleviate morning
                            stiffness.
                        </li>
                        <li>NSAIDS should be taken with food.</li>
                        <li>
                            If dyspeptic symptoms dcptrial in a patient on NSAIDs, try adding magnesium trisilicate
                            mixture. If dyspepsia persists and NSAID use is considered essential, refer for specialist
                            help. Addition of paracetamol for control of pain especially in the elderly is useful.{' '}
                        </li>
                        <li>
                            Physiotherapy or occupational therapy is a useful adjunct treatment especially after acute
                            inflammation has subsided.
                        </li>
                    </ul>
                    <p>
                        <strong>Systemic Connective Tissue Diseases</strong>
                    </p>
                    <p>
                        All cases of chronic polyarthritis dcptrial be referred for a definitive diagnosis. This group
                        shares a number of pathogenic and aetiological factors related to autoimmunity.
                    </p>
                    <p>
                        <strong>
                            Rheumatoid Arthritis and Juvenile Chronic Arthritis (Juvenile Rheumatoid Arthritis)
                        </strong>
                    </p>
                    <p>
                        To avert the erosive damage of progressive rheumatoid arthritis, early diagnosis and initiation
                        of treatment with NSAIDs, Disease Modifying Anti-Rheumatic Medicines (DMARDs) (chloroquine,
                        methotrexate and sulphasalazine), and low dose steroids in the presence of severe inflammation
                        or vasculitis is necessary. Disease modifying medicines are the mainstay of treatment to
                        minimise erosions and deformities
                    </p>
                    <p> Manage with:</p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>aspirin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>600mg</p>
                            </td>
                            <td>
                                <p>4 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={4}>
                                <p>(Paed 12.5mg – 25mg/kg)</p>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>indomethacin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25-50mg</p>
                            </td>
                            <td>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}>
                                <p>+/- an additional night time dose of</p>
                            </td>
                            <td>
                                <p>75mg</p>
                            </td>
                            <td>
                                <p>at night</p>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>ibuprofen po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>200-400mg</p>
                            </td>
                            <td>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={4}>
                                <p>(Paed 7-14mg/kg)</p>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>diclofenac po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25 -50mg</p>
                            </td>
                            <td>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        Notes: A high dose of aspirin may cause tinnitus in an adult and Reye’s Syndrome in children.
                        Maximum daily dose for indomethacin = 200mg, for ibuprofen = 2.4g
                    </p>
                    <p> Disease modifying anti-rheumatic medicines should be started early:</p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>methotrexate po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>S</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>5- 25mg</p>
                            </td>
                            <td>
                                <p>Once a week</p>
                            </td>
                            <td>
                                <p>review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>or</p>
                            </td>
                            <td>
                                <p>
                                    <strong>chloroquine po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>S</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>150mg base</p>
                            </td>
                            <td>
                                <p>once a day</p>
                            </td>
                            <td>
                                <p>continual/ review</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        Referral to an ophthalmologist is strongly advised after 9 months of continuous treatment with
                        chloroquine. Such continuous treatment should never exceed 2 years. Treatment should be
                        discontinued if a patient complains of visual disturbance on chloroquine. Methotrexate should be
                        monitored with FBC and LFTs at 3 monthly intervals.
                    </p>
                    <p>
                         Oral, low maintenance dose prednisolone can be <strong>added</strong> where indicated for a
                        limited dcptrial
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>prednisolone po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>2.5 – 10mg</p>
                            </td>
                            <td>
                                <p>once a day</p>
                            </td>
                            <td>
                                <p>limited period</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <strong>
                            <em>Note: Best results are achieved with combination of medicines.</em>
                        </strong>
                    </p>
                    <p>
                        <strong>Systemic Lupus Erythematosus (SLE)</strong>
                    </p>
                    <p>
                        Refer to a higher level for diagnosis and initial treatment. Sun-exposure should be avoided as
                        much as possible particularly with the use of broad-brimmed hats and umbrellas.
                    </p>
                    <p>Manage with aspirin or indomethacin as for Rheumatoid arthritis as above.</p>
                    <p>
                         If severe skin or joint lesions,
                        <strong>add</strong>:
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>chloroquine po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>S</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>150mg base</p>
                            </td>
                            <td>
                                <p>once a day</p>
                            </td>
                            <td>
                                <p>continual/ review</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                         In severe disease with complications e.g. renal, neurological, vascular or haematological{' '}
                        <strong>add</strong> prednisolone in high doses as well as immunosuppressive medicines:
                    </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>prednisolone po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B V</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>1mg/kg</p>
                            </td>
                            <td>
                                <p>once a day</p>
                            </td>
                            <td>
                                <p>review, then reduce</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                         Reduce dose after crisis is over to smaller maintenance dose, enough to suppress activity.
                        Steroids should be started early and closely monitored for side effects.
                    </p>
                    <p>
                         Additionally
                        <strong>azathioprine</strong> can be used to spare the high dose of prednisolone. It dcptrial
                        specialist monitoring for side effects, especially haematological ones. Refer for specialist
                        care.
                    </p>
                    <p>
                        <strong>Degenerative Osteoarthritis &amp; Spinal Spondylosis</strong>
                    </p>
                    <p>Manage with:</p>
                    <table>
                        <tr>
                            <td></td>
                            <td>Medicine</td>
                            <td colSpan={2}>Codes</td>
                            <td>Adult Dose</td>
                            <td>Frequency</td>
                            <td colSpan={2}>Duration</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    <strong>aspirin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>300-600mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>4 hourly</p>
                            </td>
                            <td>
                                <p>review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>indomethacin po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25-50mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>ibuprofen po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>C N</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>200-400mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>
                            </td>
                            <td>
                                <p>review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>or</td>
                            <td>
                                <p>
                                    <strong>diclofenac po</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>B E</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>25 -50mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>3 times a day</p>{' '}
                            </td>
                            <td>
                                <p>Review</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <strong>Rheumatoid factor negative spondyloarthropathies</strong>
                    </p>
                    <p>Reiter’s disease and Post Infective Arthritis</p>
                    <p>Treat as for osteoarthritis as above. Exclude UTI/ bowel infection and HIV infection.</p>
                </span>
            ),
        },
    ],
    content: <div> </div>,
}
