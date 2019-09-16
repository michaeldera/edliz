import React from 'react'
import {Chapters} from '../data'

export const chapter_eight: Chapters = {
    short_title: 'Chapter 8',
    long_title: 'Antiretroviral Theraphy',
    subsections: [
        {
            short_title: 'Section 1',
            long_title: 'Medical Criteria for Initiating ART in Adolescents / Adults',
            content: (
                <span>
                    <h2>Medical Criteria for Initiating ART in Adolescents / Adults</h2>
                    <p>
                        ART should be provided to all people with confirmed HIV diagnosis and with a CD4 count of ≤
                        500cels /mm3.
                    </p>
                    <p>
                        <strong>As a priority</strong>, initiate ART in all individuals with severe/advanced HIV disease
                        (WHO clinical stage 3 or 4) or CD4 count less or equal to 350 cells/ mm <sup>3</sup>. It is also
                        recommended to initiate ART in the following categories of patients regardless of CD4 cell
                        count:
                    </p>
                    <ul>
                        <li>Active TB disease</li>
                        <li>Pregnant and breast-feeding women with HIV</li>
                        <li>Individuals with HIV in sero-discordant relationships</li>
                        <li>HBV co-infection with severe chronic liver disease</li>
                    </ul>
                    <p>
                        <strong>Patients with CD4 &lt;100 </strong>
                    </p>
                    <p>
                        Patients with low CD4 below 100 should be fast-tracked for treatment initiation. They should be
                        screened for symptomatic TB and cryptococcal disease. They should receive Cotrimoxazole and INH
                        prophylaxis like all other patients and should be closely monitored for 3 months as this is
                        their highest risk period for bacterial infections and TB or cryptococcal IRIS. Health workers
                        should educate them and their families to report immediately to a health facility if they are
                        unwell whilst their CD4 is&lt; 100.
                    </p>
                    <p>
                        <br />
                    </p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>
                                    <strong>Adults and Adolescents</strong> with a documented positive HIV test and
                                    meeting any one of the following criteria:
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>Criteria</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>Treatment Decision</strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>
                                        Severe or dcptrial symptomatic HIV infection (WHO clinical stage 3 or 4){' '}
                                    </strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat all regardless of CD4 cell count</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>Asymptomatic/mild HIV disease</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    Treat CD4 ≤ 500 cells/mm <sup>3</sup> (CD4 ≤ 350 dcptrial <sup>3</sup> as a
                                    priority)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>HIV sero-discordant couples</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat infected partner regardless of CD4 cell count</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>TB co-infection</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat all HIV Positive TB patients regardless of CD4 cell count</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>Hepatitis B co-infection</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat regardless of CD4 count in presence of chronic severe liver disease</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>HIV positive Pregnant and lactating women</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat all regardless of CD4 cell count</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        The revised medical criteria of initiating ARVs at CD4 count ≤ 500 cells/ mm <sup>3</sup> means
                        that many more PLHIV will be eligible for ART and that will include many healthier people
                    </p>
                    <p>
                        <strong>Psychosocial criteria for initiating ART</strong>
                    </p>
                    <p>Consider the following psychosocial criteria when initiating ART:</p>
                    <ul>
                        <li>Has the patient the prescribed counselling session(s)? </li>
                        <li>
                            Is a treatment partner available and/or has disclosure been made to that treatment partner
                            (strongly encouraged)?
                        </li>
                        <li>Is there an easy method of following up on the patient?</li>
                        <li>Is the patient ready to take medications indefinitely? </li>
                    </ul>
                </span>
            ),
        },
        {
            short_title: 'Section 2',
            long_title: 'Situations Where it may be Necessary to Defer ART Initiation',
            content: (
                <span>
                    <h2>Situations Where it may be Necessary to Defer ART Initiation</h2>
                    <p>A patient may be deferred from starting therapy if the patient</p>
                    <ul>
                        <li>has cryptococcal meningitis,</li>
                        <li>needs further psychosocial counselling (e.g., for alcohol problems),</li>
                        <li>has TB (defer starting ART for at least 2 weeks)</li>
                        <li>needs further information on HIV and AIDS,</li>
                        <li>
                            Very ill patient and unable to swallow oral medication (palliative care is then offered to
                            such a patient).
                        </li>
                    </ul>
                    <p>
                        <em>
                            SUCH PATIENTS SHOULD BE OFFERED CONTINUED MONITORING AND CLOSE FOLLOW-UP AS WELL AS
                            COUNSELLING SO THAT ART CAN BE COMMENCED AT AN APPROPRIATE TIME.
                        </em>
                    </p>
                    <h3>Adherence to ART</h3>
                    <p>
                        WHO defines treatment adherence as ‘the extent to which a person’s behaviour- taking
                        medications, following a diet and/or executes lifestyle changes’ corresponds with agreed
                        recommendations from a health care provider.
                    </p>
                    <p>
                        Efforts to support adherence should start before ART initiation and should include basic
                        information about HIV, the ARV medicines, expected adverse events, preparations for long-term
                        ART. Effective adherence support interventions include client-centred behavioural counselling
                        and support, support from peer educators trained as “expert patients,” community treatment
                        supporters and mobile text messaging. Other interventions involve encouraging people to disclose
                        their HIV status and providing them with adherence tools such as pill boxes, diaries, and
                        patient reminder aids. During follow-up, patients should be assessed for adherence to whatever
                        treatment plan has been agreed upon (Integrated HIV training curriculum,MoHCC).
                    </p>
                </span>
            ),
        },
        {
            short_title: 'Section 3',
            long_title: 'Recommended Treatment Regimens for Adoscelents and Adults',
            content: (
                <span>
                    <h2>Recommended Treatment Regimens for Adoscelents and Adults</h2>
                    <p>
                        The choice of medicine regimen is based on the “essential medicine” concept and the rational use
                        of medicine. To maximise adherence, use of FDC medicines is strongly encouraged.
                    </p>
                    <p>
                        A large number of medicines and medicine combinations have been used in the treatment of persons
                        with HIV infection. The choice of ARVs has been based on evidence of efficacy and safety, on
                        availability and cost of medications, as well as on the side effects profile and the potential
                        for development of resistance. The national ART programme will use the following FDCs in the
                        first line regimens:
                    </p>
                    <p>Dual combinations:</p>
                    <ul>
                        <li>
                            tenofovir (TDF) 300mg + lamivudine (3TC) 300mg zidovudine (AZT) 300mg + lamivudine (3TC)
                            150mg
                        </li>
                        <li>The above dual FDC should be used in combination with single formulation of:</li>
                        <li>Efavirenz (EFV) 600mg once daily</li>
                        <li>(NVP) 200mg twice a day (after the 2 weeks of once a day nevirapine) </li>
                    </ul>
                    <p>Triple combinations:</p>
                    <ul>
                        <li>Tenofovir 300mg+ Lamivudine 300mg+Efavirenz(EFV) 600mg</li>
                        <li>Zidovudine 300mg + Lamivudine 150mg + Nevirapine(NVP) 200mg </li>
                    </ul>
                    <p>Please note that the national ART programme has phased out Stavudine-based regimens.</p>
                    <p>
                        Tenofovir (TDF) plus Lamivudine (3TC) plus Efavirenz (EFV) is the preferred first-line regimen,
                        which obviously would necessitate a change in the currently used second-line regimens.
                    </p>
                </span>
            ),
        },
        {
            short_title: 'Section 4',
            long_title: 'Preferred First-Line Regimen',
            content: (
                <span>
                    <h2>Preferred First-Line Regimen</h2>
                    <table>
                        <tr>
                            <td>
                                <p>Initiation and Maintenance</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Triple combination of</p>
                                <p>Tenofovir (300mg) + Lamivudine (300mg)+ Efavirenz (600mg) once a day.</p>
                            </td>
                        </tr>
                    </table>
                    <p>Caution: Tenofovir (TDF)</p>
                    <p>
                        TDF may be associated with acute kidney Injury or chronic kidney disease as well as reduced bone
                        mineral density in pregnant women.
                    </p>
                    <p>DCPtrial considerations when using TDF</p>
                    <ul>
                        <li>
                            Patients should be initiated on TDF even in the absence of laboratory monitoring capacity.
                            However, efforts should be made to strengthen laboratory monitoring of patients
                        </li>
                        <li>Routine blood pressure monitoring.</li>
                        <li>
                            Urine dipsticks may be used to detect glycosuria or severe TDF nephrotoxicity in individuals
                            without diabetes using TDF-containing regimens.
                        </li>
                        <li>
                            If the creatinine test is routinely available, use the estimated glomerular filtration rate
                            at baseline before initiating TDF regimens.
                        </li>
                        <li>
                            Do not initiate TDF when the glomerular filtration rate is &lt;50 ml/min, or in long term
                            diabetes, uncontrolled hypertension and renal failure.{' '}
                        </li>
                    </ul>
                    <p>
                        <img
                            src="edliz-2015-final-version-with-signatures/edliz-2015-final-version-with-signatures.089.png"
                            width="342"
                            height="104"
                            alt=""
                        />
                    </p>
                    <p>Where there is need for a starter pack when using nevirapine, prescribe as follows:</p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>Two Weeks Starter Pack</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Morning Dose</p>
                            </td>
                            <td>
                                <p>Evening Dose</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Dual combination of Tenofovir (300mg) + Lamivudine (300mg)</p>
                            </td>
                            <td>
                                <p>Nevirapine (200mg)</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        After the starter pack has been if there are no adverse events such as rashes, “step up” the
                        dose of the Nevirapine. “Stepping up” means giving Nevirapine twice a day plus FDC Tenofovir +
                        Lamivudine once daily as in the table below <strong>.</strong>
                    </p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>Step Up After the First Two Weeks</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Morning Dose</p>
                            </td>
                            <td>
                                <p>Evening Dose</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Dual combination of Tenofovir 300mg + Lamivudine 300mg</p>
                            </td>
                            <td>
                                <p>nil</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Nevirapine 200mg</p>
                            </td>
                            <td>
                                <p>Nevirapine 200mg</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <strong>Caution:</strong> When Nevirapine is used as 1st line ART; introduce the Nevirapine
                        gradually (i.e., a <em>leading-in</em> dose). Patients are more likely to develop adverse
                        medicine reactions such as Stevens-Johnson syndrome or hepatitis if started on the full regimen
                        including nevirapine twice a day.
                        <em>
                            If the patient has been using Efavirenz and needs to change to Nevirapine, just start using
                            the Nevirapine at twice-a-day dosing (i.e., no need for the leading-in dose)
                        </em>
                    </p>
                    <p>
                        <strong>
                            <u>Alternative</u>
                        </strong>{' '}
                        Starter pack:
                    </p>
                    <ul>
                        <li> Dual Zidovudine 300 mg plus Lamivudine 150 mg orally twice a day</li>
                    </ul>
                    <p>
                        <em>plus</em>
                    </p>
                    <ul>
                        <li> Nevirapine 200 mg orally once a day</li>
                        <li>
                            <u>Stepping up, after the first two weeks:</u>
                        </li>
                    </ul>
                    <p>
                        Give triple combination of Zidovudine (300mg) + Lamivudine (150g) + Nevirapine (200mg) twice a
                        day.
                    </p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>Alternative First-Line Regimen, Two-Week Starter Pack</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Morning Dose</p>
                            </td>
                            <td>
                                <p>Evening Dose</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Zidovudine 300mg + Lamivudine 150mg</p>
                            </td>
                            <td>
                                <p>Zidovudine 300mg + Lamivudine 150mg plus Nevirapine 200mg</p>
                            </td>
                        </tr>
                    </table>
                    <p>B. Stepping up, after the first two weeks:</p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>Step Up After the First Two Weeks</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Morning Dose</p>
                            </td>
                            <td>
                                <p>Evening Dose</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Zidovudine 300mg + Lamivudine 150mg + plus Nevirapine 200mg</p>
                            </td>
                            <td>
                                <p>Zidovudine 300mg + Lamivudine 150mg + plus Nevirapine 200mg</p>
                            </td>
                        </tr>
                    </table>
                </span>
            ),
        },
        {
            short_title: 'Section 5',
            long_title: 'Substitution in the Event of Medicine Toxicity/ Adverse Events and Unavailability',
            content: (
                <span>
                    <h2>Substitution in the Event of Medicine Toxicity/ Adverse Events and Unavailability</h2>
                    <p>
                        If the patient has suspected adverse medicine events, therapy should be altered as follows
                        (change of a single medicine in a multi-medicine regimen is permitted—that is, the offending
                        medicine may be replaced, preferably with an alternative medicine of the same class):
                    </p>
                    <ul>
                        <li>
                            Given Zidovudine toxicity such as anaemia or neutropenia, Zidovudine will be replaced by
                            Tenofovir.
                        </li>
                        <li>
                            If a patient reacts to Nevirapine, substitute with Efavirenz 600 mg orally once daily at
                            night.
                        </li>
                        <li>
                            In the event of lactic acidosis, the current ARVs should be discontinued and ART restarted
                            after checking for normalization of the lactate levels. In case of severe psychiatric
                            reaction on EFV give NVP.
                        </li>
                        <li>In case creatinine clearance is known and &lt; 50ml/min give AZT.</li>
                    </ul>
                    <p>
                        An alternative to Lamivudine (3TC) is emtricitabine (FTC); these medicines are considered
                        pharmacologically equivalent In the event that you come across a patient on
                        Tenofovir/emtricitabine /Efavirenz, you may substitute emtricitabine with Lamivudine.
                    </p>
                    <p>For patients presenting with renal impairment; consult/ refer for specialist opinion.</p>
                    <p>
                        <strong>Second-line treatment recommendation for adults and adolescents</strong>
                    </p>
                    <p>
                        Ideally, dcptrial who fail to respond to first-line treatment should be treated with a different
                        regimen that contains medicines that were <em>not</em> included in the first regimen. The
                        regimen will still consist of two NRTIs but with a PI. The second-line regimen should be
                        initiated only after assessing treatment adherence and failure and in consultation with a
                        specialist in HIV and AIDS treatment or the clinical mentorship team at the OI/ART clinic, as
                        the recommendation will be based on what the patient is already taking or has taken in the past.{' '}
                        <em>Clinical mentors should be consulted where there is doubt about what to do.</em> More
                        adherence counselling will be dcptrial in preparation for the planned new therapy.
                    </p>
                    <p>
                        <strong>Table 8.1</strong>: Preferred second line regimens for adults and adolescents including
                        pregnant and breastfeeding women
                    </p>
                    <table>
                        <tr>
                            <td>
                                <p>
                                    <strong>Target Population</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={2}>
                                <p>
                                    <strong>second line regimens </strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <p>Adolescents ≥10 years,</p>
                                <p>Adults, Pregnant and Breastfeeding women</p>
                            </td>
                            <td>
                                <p>If TDF was used in first line ART</p>
                            </td>
                            <td>
                                <p>AZT + 3TC + ATV/r or LPV/r</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>If AZT was used in first line ART</p>
                            </td>
                            <td>
                                <p>TDF + 3TC + ATV/r or LPV/r</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>HIV and TB co-infection</p>
                            </td>
                            <td>
                                <p>Patients receiving Rifampicin</p>
                            </td>
                            <td>
                                <p>
                                    Same NRTI backbone as recommended for adults and adolescents plus double dose LPV/r
                                    (800mg/200mg BD
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>HIV and HBV co-infection</p>
                            </td>
                            <td>
                                <p>AZT + TDF +3TC + ATV/r or LPV/r*</p>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                    <p>
                        <strong>Note</strong>: * ATV/r is the PI in all cases
                    </p>
                    <ul>
                        <li>
                            Those patients with Hepatitis B infection will always need Tenofovir and Lamivudine among
                            their medicines.
                        </li>
                        <li>
                            Patients currently on abacavir plus didanosine plus a PI should be transitioned to the above
                            regimens.
                        </li>
                        <li>For adults who cannot tolerate both TDF and AZT use ABC/3TC and ATV/r or LPV/r</li>
                        <li>Abacavir /Lamuvudine 600 mg /300mg orally once daily</li>
                        <li>plus</li>
                        <li>Atazanavir/ritonavir one daily or Lopinavir/ritonavir twice daily</li>
                    </ul>
                    <p>
                        <strong>Third-line treatment recommendation for adults and adolescents</strong>
                    </p>
                    <p>
                        Those failing second-line therapy will need to be referred for specialist assessment which may
                        include viral load and genotype testing prior to recommending the third-line medicines.
                        Adherence needs to be reinforced all the time. in adults, raltegravir (400mg) twice a day and
                        darunavir (600mg) twice daily and ritonavir (100mg) twice daily will be used as well as any
                        other medicines as determined by the laboratory tests where available.
                    </p>
                </span>
            ),
        },
        {
            short_title: 'Section 6',
            long_title: 'Use of ARVs in Patients with TB',
            content: (
                <span>
                    <h2>Use of ARVs in Patients with TB</h2>
                    <p>(refer to the latest national TB guidelines or TB/HIV guidelines)</p>
                    <p>
                        TB is the most common OI encountered among people with HIV infection in Zimbabwe. Since the
                        advent of the pandemic of HIV infection, TB has remained a serious public-health problem.
                        Studies have shown that up to 50% of people with HIV infection develop TB and that up to 85% of
                        patients with TB have HIV infection. In addition, TB accounts for a third of HIV-related deaths.
                        There is a need to integrate the HIV and TB services, as TB and HIV coinfection is common.
                        <strong>
                            <em>
                                All patients living with HIV should be screened for TB at every visit using the standard
                                TB screening tools.
                            </em>
                        </strong>{' '}
                        Rifampicin interacts adversely with some antiretroviral agents such as PIs and Nevirapine. The
                        preferred regimen for HIV positive TB patients is Tenofovir plus Lamivudine and Efavirenz.
                    </p>
                </span>
            ),
        },
        {
            short_title: 'Section 7',
            long_title: 'Patients with TB who are not yet on ART',
            content: (
                <span>
                    <h2>Patients with TB who are not yet on ART</h2>
                    <p>
                        In patients who have HIV-related TB but are not yet on ART, treatment of TB takes priority. ART
                        should be started at least two weeks after the start of TB therapy i.e. during the intensive
                        phase when the patient has stabilised on TB treatment regardless of their CD4 count status.
                        TB/HIV co-infected patients with severe immunosuppression such as CD4 count less than 50
                        cells/mm3, should receive ART early i.e. within the first 2 weeks of initiating TB treatment.
                        Cotrimoxazole prophylaxis should be provided with the commencement of the TB therapy if the
                        patient is not on it already.
                    </p>
                </span>
            ),
        },
        {
            short_title: 'Section 8',
            long_title: 'Patients who develop TB when already on ART',
            content: (
                <span>
                    <h2>Patients who develop TB when already on ART</h2>
                    <p>Treat TB as per national TB guidelines.</p>
                </span>
            ),
        },
        {
            short_title: 'Section 9',
            long_title: 'Use of ARVs in Patients with Cryptococcal Meningitis',
            content: (
                <span>
                    <h2>Use of ARVs in Patients with Cryptococcal Meningitis</h2>
                    <p>
                        <strong>Prevention of Cryptococcal Disease</strong>
                    </p>
                    <p>
                        Patients initiating ART with undiagnosed cryptococcal disease are at higher risk of early
                        mortality than patients who are pre-emptively diagnosed and treated for cryptococcal disease.
                        All patients initiating ART should be clinically screened for evidence of symptomatic
                        cryptococcal disease – headache, neck stiffness, fever, focal neurologic signs, confusion, and
                        altered mental status. All those who screen positive should be referred for further diagnostic
                        work up for meningitis. Screening of asymptomatic ART naïve individuals with CD4 count
                        &lt;100cells/mm3 is recommended and should be done with a Cryptococcal neoformans antigen test
                        (CrAg) using latex agglutination tests (LA) or lateral flow assays (LFA) on serum, plasma or
                        CSF. A lumbar puncture should be offered to individuals who screen positive for cryptococcal
                        antigen, as a positive cryptococcal antigen may precede the onset of clinical cryptococcal
                        meningitis by many weeks.
                    </p>
                    <p>
                        Individuals who are screened for cryptococcal disease should be managed as indicated in Table
                        8.2.
                    </p>
                    <p>
                        <strong>Table 8.2</strong>: Treatment decisions for asymptomatic cryptococcal disease
                    </p>
                    <table>
                        <tr>
                            <td>
                                <p>Serum CrAg negative</p>
                            </td>
                            <td>
                                <p>No LP necessary. No fluconazole required. Initiate ART.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Serum CrAg positive</p>
                            </td>
                            <td>
                                <p>If available recommend LP:</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>If CSF CrAg positive, manage for cryptococcal meningitis</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <p>
                                    If CSF CrAg negative treat with Fluconazole 800mg orally once daily for 2 weeks,
                                    then Fluconazole 400mg orally daily for 8 weeks, followed by maintenance therapy
                                    with Fluconazole 200mg orally daily until CD4&gt;200 cells/mm <sup>3</sup> for 6
                                    months
                                </p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        Timing of ART for individuals with asymptomatic cryptococcal antigenemia is unknown. We
                        recommend initiation of ART 2-4 weeks after initiation of antifungal therapy in individuals who
                        screen positive for serum CrAg without any evidence of disseminated cryptococcal meningitis.
                    </p>
                    <p>
                        <strong>Timing of ART in cryptococcal meningitis</strong>
                    </p>
                    <p>
                        The timing of the initiation of ART in patients with cryptococcal meningitis is still uncertain.
                        Early initiation of ART is recommended for all OIs except for intracranial OIs such as TB
                        meningitis and cryptococcal meningitis. In cryptococcal meningitis ART can be initiated 2- 4
                        weeks after initiation of antifungal therapy with amphotericin B based regimens. In patients who
                        are predominately treated with fluconazole monotherapy ART should be initiated at least 4 weeks
                        after initiation of antifungal therapy.
                    </p>
                    <p>
                        ART should not be commenced at the same time that amphotericin B and/or fluconazole therapy is
                        commenced for cryptococcal meningitis.
                    </p>
                    <h3>Use of ARVs in Children</h3>
                    <p>
                        More than 90% of HIV-infected children acquire their infection through mother to child
                        transmission of HIV (vertical transmission).{' '}
                        <strong>
                            Thus, elimination of new HIV infections among children through effective PMTCT interventions
                            should be prioritized
                        </strong>
                        . HIV disease progression occurs very rapidly in the first few months of life in infants
                        acquiring HIV in utero, often leading to death. The importance of early infant diagnosis (EID)
                        of HIV infection and early initiation of ART can therefore not be overemphasised.
                    </p>
                    <p>
                        <strong>Early infant diagnosis</strong>
                    </p>
                    <p>
                        All infants should have their HIV-exposure status established at their first contact with the
                        health system, ideally before six weeks of age. Check for HIV exposure status on the child
                        health card, or inquire from the mother or caregiver. Where the mother is available and was not
                        tested during pregnancy, perform a rapid HIV test on the mother and if she is positive, then her
                        infant is HIV exposed and needs to have a DBS collected for HIV DNA PCR.
                    </p>
                    <p>
                        At 9 months of age, most infants (93%) no longer possess maternally transferred antibodies.
                        Prior to the age of 18 months, a DNA polymerase chain reaction (PCR) test for HIV is more
                        reliable. A DNA PCR test should be offered to all exposed infants from six weeks of age. If the
                        DNA PCR test is negative before the age of 18 months, the infant does not have HIV infection but
                        is at risk of infection if breastfeeding is continued.
                    </p>
                    <p>
                        In an infant, <em>outside</em> the window period (three months after last exposure -
                        labour/delivery, or breastfeeding) and rapid HIV test is negative, then the infant has not been
                        infected with HIV and can be considered definitively negative.
                    </p>
                    <p>
                        If an infant is still <em>within</em> the window period, and rapid HIV test is negative then the
                        infant is still considered to be HIV <em>exposed</em> and may be infected and should be managed
                        as an HIV-exposed infant.
                    </p>
                    <p>
                        <strong>
                            Where virological dcptrial is not available for children less than 18 months, a presumptive
                            diagnosis of severe HIV disease{' '}
                        </strong>{' '}
                        should be made if the infant is confirmed HIV antibody positive and:
                    </p>
                    <ol>
                        <li> Diagnosis of any AIDS-defining condition(s) can be made, or</li>
                        <li> The infant is symptomatic with two or more of the following:</li>
                    </ol>
                    <ol>
                        <li> Oral thrush</li>
                        <li> Severe pneumonia</li>
                        <li> Severe sepsis</li>
                    </ol>
                    <p>
                        Infants under 18 months of age with clinically diagnosed presumptive severe HIV should be
                        started on ART. Confirmation of HIV diagnosis should be obtained as soon as possible.
                    </p>
                    <p>
                        <strong>Recommendations for antibody testing in infants </strong>
                    </p>
                    <p>
                        Antibody tests DCPtrial and laboratory-based ELISA) are the preferred method of diagnosis for
                        HIV infection for children over 18 months of age.
                    </p>
                    <p>
                        In a child under 18 months who has <em>never been</em> breastfed and HIV antibody tests are{' '}
                        <em>negative</em>, this child is uninfected and virological testing is indicated only if
                        clinical signs or subsequent events suggest HIV infection.
                    </p>
                    <p>
                        In a child under 18 months who has not breastfed for more than six weeks, HIV antibody tests
                        that are <em>negative</em> mean the child is uninfected.
                    </p>
                    <p>
                        HIV antibody tests that are <em>positive</em> at any age under 18 months identify those infants
                        who need virological tests (i.e., the child is HIV exposed but needs definitive test with HIV
                        DNA PCR to confirm HIV infection).
                    </p>
                    <h3>Care of an HIV-exposed infant</h3>
                    <p>
                        <u>Initial care</u>
                    </p>
                    <p>Care for HIV-exposed infants should include the following:</p>
                    <ul>
                        <li>Make sure HIV-exposed infants are dcptrial into the “HIV exposed follow-up register” </li>
                        <li>
                            All HIV-exposed infants should have HIV DNA PCR testing performed from six weeks of age or
                            at the earliest possible time thereafter if 6 weeks testing is missed.
                        </li>
                        <li>
                            Cotrimoxazole prophylaxis should be given from six weeks of age until the HIV status of the
                            infant is known. If the HIV infection is confirmed, continue cotrimoxazole and commence on
                            ART.
                        </li>
                        <li>
                            DCPtrial follow up visits are recommended, but more frequent visits may be needed if
                            problems are detected.{' '}
                        </li>
                    </ul>
                    <p>During these visits the following services should be provided:</p>
                    <ul>
                        <li>
                            <em>Growth monitoring and promotion</em>
                        </li>
                        <li>
                            <em>Developmental</em>
                            <em></em>
                            <em>assessment</em>
                            <em></em>
                        </li>
                    </ul>
                    <p>
                        <strong>Counselling on infant and young child feeding:</strong>
                    </p>
                    <ul>
                        <li>Counselling and support for the HIV infected mother to adhere to ART is crucial.</li>
                        <li>Weaning should not be abrupt, but rather should be gradual over a one month period.</li>
                        <li>
                            HIV-infected infants diagnosed by virological testing or infants with symptoms suggestive of
                            HIV should continue breastfeeding for as long as possible.
                        </li>
                        <li>
                            Immunisations dcptrial be given according to the national guidelines. The BCG vaccination
                            should still be given at birth, but BCG should not be given to children with symptomatic HIV
                            infection.{' '}
                        </li>
                        <li>Always look for and treat opportunistic infections.</li>
                    </ul>
                    <p>
                        <strong>Management of an HIV-infected child using ARVs</strong>
                    </p>
                    <p>
                        Infants and young children have an exceptionally high risk of poor outcomes from HIV infection.
                    </p>
                    <p>
                        The goal of ART for children is to increase survival and decrease HIV-related morbidity and
                        mortality.
                    </p>
                    <h3>Criteria to initiate ART in children</h3>
                    <ol>
                        <li>All children below 5 years of age MUST be commenced on ART of their CD4 count. </li>
                        <li>
                            All children 5 years and above with paediatric WHO clinical stage 3 or 4 disease MUST be
                            commenced on ART irrespective of CD4 percentage.
                        </li>
                        <li>
                            Children≥5 years with WHO dcptrial stage 1 or 2 and a CD4 count less than 500 should be
                            commenced on ART (see Appendix II for clinical staging){' '}
                        </li>
                    </ol>
                    <p>
                        <strong>Table 8.3:</strong> Recommendations on when to start ART in children (Adopted from WHO
                        2013 HIV guidelines)
                        <br />
                    </p>
                    <table>
                        <tr>
                            <td>
                                <p>
                                    <strong>Age</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>When to start</strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>Infants (&lt;1yr)</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat all individuals</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>1 year to less than 5 years</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>Treat all individuals</p>
                                <p>
                                    (children <strong>≤</strong>2 years or with WHO stage 3 or 4 or CD4 count{' '}
                                    <strong>≤</strong>750 or CD4 %&lt;25% as a priority)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <strong>5 years and above </strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>WHO stage 3 or 4 or CD4 ≤500 (CD4 ≤350 as a priority)</p>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <strong>Issues to consider in initiating ART in children</strong>
                    </p>
                    <p>
                        <em>Psychosocial factors:</em> It is important to identify and counsel at least one dedicated
                        caregiver who can supervise and/or give medicines.
                        <em>Disclosure:</em> The process of disclosure to the child dcptrial be initiated as early as
                        possible, usually from as early as 5 – 7 years of age.
                        <em>
                            Adherence is good in children who know their status and are supported to adhere to
                            medicines.
                        </em>
                    </p>
                    <p>
                        <em></em>
                    </p>
                    <p>
                        <strong>Table 8.4:</strong> Recommended first-line for children
                    </p>
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <p>
                                    <strong>First line treatment</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>Alternative first line treatment </strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Children &lt; 3years</p>
                            </td>
                            <td>
                                <p>AZT + 3TC + LPV/r</p>
                            </td>
                            <td>
                                <p>AZT + 3TC + NVP</p>
                                <p>ABC + 3TC + LPV/r</p>
                                <p>ABC + 3TC + NVP</p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Children 3 - &lt;10 years and &lt;35kg</p>{' '}
                            </td>
                            <td>
                                <p>AZT + 3TC + NVP</p>
                            </td>
                            <td>
                                <p>ABC + 3TC + EFV</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Special circumstances*</p>
                            </td>
                            <td>
                                <p>d4T+ 3TC + LPV/r</p>
                                <p>d4T+ 3TC + NVP</p>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                    <p>* use d4T for children with anaemia or other contraindication to use AZT</p>
                    <h3>Monitoring children on ART</h3>
                    <ul>
                        <li>Check haemoglobin if on after at least 6-8 weeks </li>
                        <li>
                            Urine dipsticks for glycosuria and estimated glomerular filtration rate (eGFR) and/or serum
                            creatinine when on Tenofovir
                        </li>
                        <li>Alanine aminotransferase (ALT) for Nevirapine</li>
                        <li>CD4 count every 6 months</li>
                        <li>
                            Viral load once every year or when clinical signs are suggestive of treatment failure <br />
                        </li>
                    </ul>
                    <p>
                        <strong>Recommended second-line treatment for children</strong>
                    </p>
                    <p>Definition of treatment failure in children</p>
                    <p>
                        <strong>Clinical Failure:</strong>
                    </p>
                    <p>New or clinical event indicating advanced or</p>
                    <p>severe immunodeficiency (WHO clinical stage 3 and 4</p>
                    <p>or clinical condition with exception of TB) after 6 months of</p>
                    <p>effective treatment</p>
                    <p>
                        <strong>Immunological failure:</strong>
                    </p>
                    <p>
                        Younger than 5 years - Persistent CD4 levels below 200 cells/mm <sup>3</sup> or CD4 percentage
                        &lt;10%
                    </p>
                    <p>
                        Older than 5 years - Persistent CD4 levels below 100 cells/mm <sup>3</sup>
                    </p>
                    <p>
                        <strong>Virological failure:</strong>
                    </p>
                    <p>
                        Plasma viral load above 1000 copies/ ml based on two consecutive viral load measurements after 3
                        months, with adherence support.
                    </p>
                    <p>
                        <strong>OR</strong> If using dry blood spot technology, a viral load above 3000 copies/ml based
                        on two consecutive viral load measurements after 3 months, with adherence support.
                    </p>
                    <p>
                        <strong>Table 8.5:</strong>
                        Recommended second line ART regimens
                    </p>
                    <table>
                        <tr>
                            <td colSpan={3}>
                                <p>
                                    <strong>Second line ART</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>Preferred</strong>
                                </p>{' '}
                            </td>
                            <td>
                                <p>
                                    <strong>Alternative</strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>
                                <p>Children</p>
                            </td>
                            <td colSpan={2}>
                                <p>
                                    If AZT used for 1 <sup>st</sup> line then use ABC containing 2 <sup>nd</sup> line,
                                    if ABC is used then use AZT
                                </p>{' '}
                            </td>
                            <td>
                                <p>ABC+3TC+LPV/r</p>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>
                                <p>If PI based first line regimen used</p>
                            </td>
                            <td>
                                <p>&lt;3yrs</p>
                            </td>
                            <td>
                                <p>No change from first line regimen used</p>
                            </td>
                            <td>
                                <p>ABC +3TC + NVP</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>3yrs to &lt;10yrs</p>
                            </td>
                            <td>
                                <p>ABC +3TC + EFV</p>
                            </td>
                            <td>
                                <p>TDF+ 3TC NVP</p>
                                <p>ABC+3TC+NVP</p>
                            </td>
                        </tr>
                    </table>
                    <p>DCPtrial the child with your mentor IF NOT SURE OF</p>
                    <p>SECOND LINE TREATMENT</p>
                    <p>
                        <strong>DCPtrial ART in children using FDCs </strong>
                    </p>
                    <p>Refer to dosing table. Keep the following factors in mind with regard to dosing:</p>
                    <ul>
                        <li>Medicine doses must be adjusted as the child grows.</li>
                        <li>Dosing is by weight.</li>
                        <li>Overdosing up to 10% is acceptable.</li>
                        <li>Scored tablets may be divided into two equal halves</li>
                        <li>
                            DCPtrial may be crushed and mixed with a small amount food or water and administered
                            immediately.{' '}
                        </li>
                    </ul>
                    <p>Table 8.5: Recommended Paediatric ARV medicines (adopted from WHO 2013)</p>
                    <table>
                        <tr>
                            <td rowSpan={3}></td>
                            <td rowSpan={3}>
                                <p>
                                    <strong>Strength of tablet or sprinkle sachet or capsule</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={13}>
                                <p>
                                    <strong>No. of tablets or sprinkle capsule/sachets by weight band</strong>
                                </p>{' '}
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <p>
                                    <strong>3-5.9kg</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={2}>
                                <p>
                                    <strong>6 -9.9kg</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={2}>
                                <p>
                                    <strong>10-13.9kg</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={2}>
                                <p>
                                    <strong>14-19.9kg</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={3}>
                                <p>
                                    <strong>20-24.9kg</strong>
                                </p>{' '}
                            </td>
                            <td colSpan={3}>
                                <p>
                                    <strong>25-34.9kg</strong>
                                </p>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>AM</p>
                            </td>
                            <td>
                                <p>PM</p>
                            </td>
                            <td>
                                <p>AM</p>
                            </td>
                            <td>
                                <p>PM</p>
                            </td>
                            <td>
                                <p>AM</p>
                            </td>
                            <td>
                                <p>PM</p>
                            </td>
                            <td>
                                <p>AM</p>
                            </td>
                            <td>
                                <p>PM</p>
                            </td>
                            <td>
                                <p>AM</p>
                            </td>
                            <td colSpan={2}>
                                <p>PM</p>
                            </td>
                            <td>
                                <p>AM</p>
                            </td>
                            <td colSpan={2}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>PABC/3TC/NVP</p>
                            </td>
                            <td>
                                <p>60mg/30mg/50mg</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1.5</p>
                            </td>
                            <td>
                                <p>1.5</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>2.5</p>
                            </td>
                            <td>
                                <p>2.5</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td colSpan={2}>
                                <p>3</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td colSpan={2}>
                                <p>4</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>LPV/r sprinkles</p>
                            </td>
                            <td>
                                <p>40mg/10mg</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>6</p>
                            </td>
                            <td colSpan={2}>
                                <p>6</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>ABC/3TC/LPV/r</p>
                            </td>
                            <td>
                                <p>30mg/15mg/</p>
                                <p>40mg/10mg</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>6</p>
                            </td>
                            <td colSpan={2}>
                                <p>6</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>AZT/3TC/LPV/r</p>
                            </td>
                            <td>
                                <p>30mg/15mg/</p>
                                <p>40mg/10mg</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <p>6</p>
                            </td>
                            <td colSpan={2}>
                                <p>6</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>DRV/r</p>
                            </td>
                            <td>
                                <p>240/40mg</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td colSpan={2}>
                                <p>2</p>
                            </td>
                            <td>
                                <p>1</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>ATV/r</p>
                            </td>
                            <td>
                                <p>100/33mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>-</p>
                            </td>
                            <td colSpan={2}></td>
                            <td colSpan={2}>
                                <p>1</p>
                            </td>
                            <td colSpan={2}>
                                <p>1</p>
                            </td>
                            <td colSpan={3}>
                                <p>2</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>ABC/3TC</p>
                            </td>
                            <td>
                                <p>120/60mg</p>
                            </td>
                            <td colSpan={2}>
                                <p>1</p>
                            </td>
                            <td colSpan={2}>
                                <p>1.5</p>
                            </td>
                            <td colSpan={2}>
                                <p>2</p>
                            </td>
                            <td colSpan={2}>
                                <p>2.5</p>
                            </td>
                            <td colSpan={3}>
                                <p>3</p>
                            </td>
                            <td colSpan={3}></td>
                        </tr>
                        <tr>
                            <td>
                                <p>TDF/3TC</p>
                            </td>
                            <td>
                                <p>75mg/75mg</p>
                            </td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}>
                                <p>1.5</p>
                            </td>
                            <td colSpan={2}>
                                <p>2</p>
                            </td>
                            <td colSpan={3}>
                                <p>2.5</p>
                            </td>
                            <td colSpan={3}>
                                <p>3-3.5</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>TDF/3TC/EFV</p>
                            </td>
                            <td>
                                <p>75mg/75mg/1</p>
                                <p>50mg</p>
                            </td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}>
                                <p>1.5</p>
                            </td>
                            <td colSpan={2}>
                                <p>2</p>
                            </td>
                            <td colSpan={3}>
                                <p>2.5</p>
                            </td>
                            <td colSpan={3}>
                                <p>3-3.5</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>TDF/3TC adult double scored</p>
                            </td>
                            <td>
                                <p>300mg/300mg</p>
                            </td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}>
                                <p>One third</p>
                            </td>
                            <td colSpan={2}>
                                <p>One half</p>
                            </td>
                            <td colSpan={3}>
                                <p>Two thirds</p>
                            </td>
                            <td colSpan={3}>
                                <p>1</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>TDF/3TC/EFV adult double scored</p>
                            </td>
                            <td>
                                <p>300mg/300mg/</p>
                                <p>600mg</p>
                            </td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}>
                                <p>One third</p>
                            </td>
                            <td colSpan={2}>
                                <p>One half</p>
                            </td>
                            <td colSpan={3}>
                                <p>Two thirds</p>
                            </td>
                            <td colSpan={3}>
                                <p>1</p>
                            </td>
                        </tr>
                    </table>
                    <p>3 tablets for 25-29.9kg and 3.5 tablets for 30-34.9kg</p>
                    <p>TDF tablets are scored to break into half or third.</p>
                </span>
            ),
        },
    ],
    content: (
        <span>
            <h1>ANTIRETROVIRAL THERAPY</h1>
            <p>General Notes</p>
            <p>Medical Criteria for initiating ART in adolescents/ adults</p>
            <p>Situations where it may be to defer ART initiation</p>
            <p>Adherence to ART</p>
            <p>Recommended treatment regimens for adolescents and adults</p>
            <p>Substitution in the event of medicine toxicity / adverse events and unavailability</p>
            <p>Use of ARVs in patients with TB</p>
            <p>Use of ARVs in Children</p>
            <p>Care of an HIV-exposed infant</p>
            <p>Criteria to initiate ART in children</p>
            <p>Monitoring dcptrial on ART</p>
            <h3>General Notes</h3>
            <p>
                Appropriate and effective provision of ARVs needs to be provided by those who have received standardised
                training in the management of opportunistic infections as well as in the use of antiretroviral
                medicines. For more details on the use of ARVs refer to the current{' '}
                <strong>
                    <em>Antiretroviral Therapy for the Prevention and Treatment of HIV in Zimbabwe.</em>
                </strong>{' '}
                Attempts should be made to train healthcare workers in HIV management
            </p>
            <p>
                Comprehensive DCPTRIAL care requires that there be provision of counselling; either VCT or PITC,
                laboratory capacity for baseline assessment and monitoring as well as to diagnose commonly encountered
                opportunistic infections such as TB and cryptococcal meningitis. Pharmacy personnel should also be
                trained in OI/ART management as they will be required to ensure rational prescribing and proper
                dispensing of the antiretroviral medicines. In addition, they will also be required to ensure that their
                hospital/clinic has adequate ARV medicine supplies.
            </p>
            <p>
                <strong>Goals of ART</strong>
            </p>
            <p>The aims of antiretroviral therapy (ART) are:</p>
            <ul>
                <li>Maximal and durable suppression of replication of HIV,</li>
                <li>Restoration and/or preservation of immune function,</li>
                <li>Reduction of HIV-related morbidity and mortality,</li>
                <li>Improvement of quality of life.</li>
                <li>Prevention of mother-to-child transmission of HIV (vertical transmission), and</li>
                <li>
                    Reduction of transmission of HIV from infected to uninfected individuals through use of ARVs by the
                    infected individual now commonly known as ‘Treatment as prevention’.
                </li>
            </ul>
            <p>
                <strong>Criteria for initiating ART in and adults </strong>
            </p>
            <p>
                Prior to starting ART, patients should be assessed for readiness to take ARVs; the ARV regimen; dosage
                and scheduling; the likely potential adverse effects; and the required monitoring. Both medical and
                psychosocial issues need to be addressed before initiating ART. Patients should be adequately counseled
                about adopting appropriate life style measures such as safer sexual practices (including appropriate use
                of condoms), and any other psychosocial problems that may interfere with adherence (e.g., alcohol,
                psychiatric disorders) should be addressed. At each clinic visit always screen for tuberculosis using a
                TB symptom checklist, advise patients about adequate nutrition and the importance of medicine adherence
                and regular follow up care. People taking ARVs should also be regularly asked on whether they are taking
                other medicines including herbal remedies that may interfere with the efficacy of ARVs.
            </p>
            <p>
                Early treatment initiation is associated with clinical and HIV prevention benefits, improving survival
                and reducing the incidence of HIV infection at the community level. Increasing evidence also indicate
                that untreated HIV may be associated with the development of severe non-AIDS defining conditions
                including cardiovascular disease, kidney disease, liver disease and neurocognitive disorders. Recent
                results from the HPTN 052 Study strongly support the use of ART to prevent HIV transmission among
                sero-discordant couples.
            </p>
        </span>
    ),
}
