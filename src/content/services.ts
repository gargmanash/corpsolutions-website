export type Pillar = 'consultancy' | 'outsourcing' | 'hr'

export interface BulletGroup {
  heading?: string
  items: string[]
}

export interface Service {
  slug: string
  name: string
  pillar: Pillar
  pillarLabel: string
  shortDesc: string
  intro: string[]
  bulletGroups: BulletGroup[]
}

export const pillarMeta: Record<Pillar, { label: string; color: string; softColor: string }> = {
  consultancy: { label: 'Consultancy', color: 'var(--consultancy)', softColor: 'var(--consultancy-soft)' },
  outsourcing: { label: 'Outsourcing', color: 'var(--outsourcing)', softColor: 'var(--outsourcing-soft)' },
  hr: { label: 'HR Management', color: 'var(--hr)', softColor: 'var(--hr-soft)' },
}

export const services: Service[] = [
  /* ── CONSULTANCY ─────────────────────────────────────────── */
  {
    slug: 'financial-consultancy',
    name: 'Financial Consultancy',
    pillar: 'consultancy',
    pillarLabel: 'Consultancy',
    shortDesc: 'Sound, dependable financial planning and resource mobilization backed by two decades of expertise.',
    intro: [
      'Choosing a financial planner can be one of the most important financial decisions that a company takes but finding the right one may be really very difficult. A company should select a financial advisor that best meets its business needs.',
      'Our rich experience of serving a large and diverse clientele base provides us with requisite know-how and expertise to provide our clients with sound, dependable, and cost-effective financial planning services. We have strong association both with the domestic as well as foreign financial institutions for resource mobilization.',
    ],
    bulletGroups: [
      {
        heading: 'Under this, we provide the following services',
        items: [
          'Preparation of project reports and arrangement of debt for our clients',
          'Arrangement of private equity',
          'Restructuring of existing debts',
          'Treasury & Cash Management solutions',
          'Tie-ups with banks on collection arrangements',
          'Document Business processes and evaluate internal controls',
          'Concurrent audit / Process Risk detection',
        ],
      },
    ],
  },
  {
    slug: 'tax-consultancy',
    name: 'Tax Consultancy',
    pillar: 'consultancy',
    pillarLabel: 'Consultancy',
    shortDesc: 'Personalized tax management that reduces burdens and keeps your business fully compliant.',
    intro: [
      'Our efficient and personalized tax management team enables our clients to reduce their tax burdens and provides expert advice on the business choice for tax savings and timely tax compliance. Our services are aligned to serve personal and corporate tax planning.',
      'The tax planning measures are combined with corporate business strategies to render our clients competitive-edge and to achieve their business objectives.',
    ],
    bulletGroups: [
      {
        heading: 'Under tax consultancy, we provide the following services',
        items: [
          'Assistance in Registration procedures',
          'Assistance in Monthly and Annual Returns',
          'Assistance in GST reconciliation',
          'Tax Return Preparation',
          'Advises on availing tax exemptions, deductions, benefits, rebates, reliefs, etc.',
          'Representation before Assessing Authorities',
          'Assistance in Appeal Proceedings and Litigation Support',
        ],
      },
    ],
  },

  /* ── OUTSOURCING ─────────────────────────────────────────── */
  {
    slug: 'reconciliation',
    name: 'Reconciliation Services',
    pillar: 'outsourcing',
    pillarLabel: 'Outsourcing',
    shortDesc: 'In-house reconciliation software that handles complex bank and ledger formats with proven accuracy.',
    intro: [
      'We have our own tried and tested in house developed Reconciliation Software. We have achieved significant logical combinations in breaking the complex combinations to solve the reconciliation irrespective of different formats of bank statements and ledgers provided by our client banks and their accounting departments.',
      'The software program is now more than 10 years old. We also provide clients with various value added business reports to restructure their collection processes and also bench mark the same within various client regions to measure collection turnaround times.',
    ],
    bulletGroups: [
      {
        heading: 'Type of Reconciliation',
        items: [
          'Bank Reconciliation',
          'Payment Reconciliation',
          'GST Reconciliation',
          'General Ledger Reconciliation',
        ],
      },
      {
        heading: 'Reports provided to clients on daily / weekly / monthly basis',
        items: [
          'Reconciliation report',
          'Un-reconciled data report',
          'Total details of transaction processed in single database',
          'TAT report of collection & payment clearance',
          'Online search portal for Customer service / back office staff',
        ],
      },
    ],
  },
  {
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    pillar: 'outsourcing',
    pillarLabel: 'Outsourcing',
    shortDesc: 'Seamless end-to-end accounts payable management driven by process and technology expertise.',
    intro: [
      "The accounts payable process is immensely important since it involves nearly all of a company's payments outside of payroll. We deliver seamless Accounts Payable experiences and drive business value through our process and technology knowledge.",
    ],
    bulletGroups: [
      {
        heading: 'Under Accounts Payable, we provide the following services',
        items: [
          'Invoice receipt and matching',
          'Resolving unmatched invoices',
          'Travel & Expenses claims processing',
          'Vendor Invoice processing',
          'Credit notes processing',
          'Maker & checker level processing',
          'Payment disbursement as per agreed TAT',
          'Customised MIS',
          'Communication to Vendors / Employees related to processing & payments',
          'TDS & statutory compliance',
          'Issuance of Form 16A',
          'Vendors & Employees query management through Help Desk',
        ],
      },
    ],
  },
  {
    slug: 'call-centre',
    name: 'Call-Centre Services',
    pillar: 'outsourcing',
    pillarLabel: 'Outsourcing',
    shortDesc: 'Full-spectrum customer lifecycle management for Insurance, Telecom and Banking clients.',
    intro: [
      "The contact centre is the pivot around which the customer service function revolves, and as the leader in contact centre management services, CorpSolutions plays a key role in ensuring end customer satisfaction for its various clients. We facilitate clients effectively and successfully service their customers.",
      "Our comprehensive range of services encompasses the whole gamut of customer lifecycle management -- from customer acquisition to customer and account maintenance, customer management and retention. CorpSolutions integrates various communication tools such as email and telephone to offer valued customer support services tailored in such a way to meet our client's specific needs.",
      'We have a strong team of inbound and outbound telecallers to provide various back office and front office telecalling services to some of the leading service sector companies. We have developed our network in the various part of India and provide multi location collection / recovery services to our insurance and banking sector clients.',
    ],
    bulletGroups: [
      {
        heading: 'To Insurance Companies',
        items: [
          'Persistency calling for revival of lapsed policies',
          'Welcome calling for new policyholders',
          'Follow up for renewal premium collection and pick up',
          'Bank account update of Agents / Vendors',
          'Updation of PAN of Employees / Agents / Vendor',
          'Confirmation of assets lying in the branches',
        ],
      },
      {
        heading: 'To Telecom Companies / Banks',
        items: [
          'Welcome Calling for new customers',
          'Customer Support Services',
          'Technical Support Services',
        ],
      },
    ],
  },
  {
    slug: 'corporate-events-roadshow',
    name: 'Corporate Events & Road Show',
    pillar: 'outsourcing',
    pillarLabel: 'Outsourcing',
    shortDesc: 'Pan-India road shows, brand activations and corporate events -- planned, conceptualized and fully executed.',
    intro: [
      'We are based in Mumbai and Kolkata and offer services of corporate events and road shows through a varied pool of activities to enable our clients in reaching out their target markets and goals.',
      'We organize various brand promotion shows on behalf of corporate houses, personal brands and many more. We make sure that we maximize our clients reach of prospective target audience in the best possible manner. This is why we work in tandem with clients, understand their need and conceptualize accordingly.',
      'We have more than 5 years of rich experience in terms of hosting Road Shows on PAN India basis via Mobile Display Vans, Mobile Canter Activities, Canopies / Kiosks Installation, Mall Promotions, Society Promotions, Market Activations, Human Banners etc. Road shows are one of the best tools to create a huge amount of awareness among the masses at the time of Product Launch, Brand Promotion Activities, Promotional Marketing and Sales Promotion Exercises. Our Road Show Services include planning, conceptualization and complete execution of road shows.',
    ],
    bulletGroups: [],
  },

  /* ── HR MANAGEMENT ───────────────────────────────────────── */
  {
    slug: 'recruitment',
    name: 'Recruitment',
    pillar: 'hr',
    pillarLabel: 'HR Management',
    shortDesc: 'Decade-long expertise in customized recruitment across Finance, IT, Sales, and Back Office at every level.',
    intro: [
      'With more than a decade of rich experience in providing recruitment service to many top rank companies across the industry, CorpSolutions has the know how to help our clients achieve their key goals and objective related to short term as well as long term human resource planning.',
      'During the ten years we have gained valued experience and have enabled many top level organizations across the industry achieve their critical goals of human resource hiring across the hierarchy by extending customized service. We believe in providing company specific customized human resource recruitment facility at a highly competitive and cost effective rate.',
      'Our vision for management of services is to being a long term associate with existing and prospective clients by taking into consideration of their short term as well as long term business goals. Our approach is simple -- we first understand you and then understand your needs. We then evolve a plan and implement it efficiently to give our clients focused choices in the shortest possible time.',
    ],
    bulletGroups: [
      {
        heading: 'Our area of expertise',
        items: [
          'Finance and Accounts',
          'Legal, Secretarial and Compliance',
          'Actuarial',
          'Information Technology',
          'Human Resources',
          'Sales and Marketing',
          'Call Centre and Back office staff',
        ],
      },
    ],
  },
  {
    slug: 'contract-staffing',
    name: 'Contract Staffing',
    pillar: 'hr',
    pillarLabel: 'HR Management',
    shortDesc: 'Flexible, compliant contract workforce solutions -- ESIC, PF & PT covered -- so you can focus on your core business.',
    intro: [
      'We at CorpSolutions understand the intricacies of your business and ease you from the burden of arranging extra personnel or compromise on your work force just because it is exceeding your head count. CorpSolutions promises to be a companion and a friend in need. We surpass your expectations and come out as winner in such times of trial by scouting the most competitive and flexible work force for our esteemed clients on temporary or contractual basis.',
      'We provide information technology staffing solutions, consulting and other allied activities to the various IT and ITES companies. We ensure that the employees recruited by us are competent and skilled enough to handle the job so that our clients can achieve continuity of operations. CorpSolutions caters to your needs of flexibility of employment and gives you the ease of recruitment and replacement.',
      'We meet Contract Staffing requirements of the companies by providing statutory benefits of PF, ESIC & PT to candidates and offering a comprehensive Contract Staffing Services. We search, interview, shortlist candidates and if selected we place candidates on our companies payroll. We have a strong database of competent candidates that ultimately help us in meeting the immediate and future requirements of our clients on time.',
    ],
    bulletGroups: [],
  },
  {
    slug: 'payroll-management',
    name: 'Payroll Management',
    pillar: 'hr',
    pillarLabel: 'HR Management',
    shortDesc: 'End-to-end payroll processing -- salary, claims, LTA, TDS, statutory compliance -- handled with ease, speed and accuracy.',
    intro: [
      'Rely CorpSolutions to consistently process your complex payroll requirements with Ease, Speed, and accuracy.',
      'CorpSolutions is one of the foremost Payroll management service providers in India. Our Payroll Management system has a highly flexible and customizable payroll system that enable you to accomplish your payroll process with ease & comfort. It integrates all forms of pay out to an employee, monthly salary, claims and reimbursements, LTA, Bonus etc., and it covers every aspects of employee compensation mode, comforting both the company and the employees. Under this employee payroll system, CorpSolutions manages all statutory compliance like PF, ESIC, PT, Payment of Bonus Act etc.',
      "With over a decade of expertise in Payroll processing & managing HR related operations, we cater to multiple clients' specific payroll needs.",
    ],
    bulletGroups: [
      {
        heading: 'Our Services',
        items: [
          'Salary and benefits structuring',
          'Systematic maintenance of payroll and employee records',
          'Monthly payroll run -- Generation of payslips, salary register, statutory deduction reports, reconciliation reports',
          'Processing of employee claims',
          'IT computation & Generation of TDS certificate -- Form 16',
          'Filing of E-TDS returns',
          'Full & final settlement',
        ],
      },
    ],
  },
  {
    slug: 'employment-verification',
    name: 'Employment Verification',
    pillar: 'hr',
    pillarLabel: 'HR Management',
    shortDesc: 'On-demand, online employment background verification that eliminates errors and accelerates the hiring process.',
    intro: [
      'Verifying employment background can be very time-consuming, difficult and error prone for a variety of reasons. Organizations contacted to confirm employment history may be unresponsive and applicants often provide inaccurate or incomplete information. Our employment verification helps solve these issues through its online and on-demand service.',
      'CorpSolutions employment verification is an on-demand service that is integrated with our screening solutions. Our skilled executives confirm an applicant work history, such as company names and locations, date of joining, positions, remuneration, titles held and reason of leaving.',
    ],
    bulletGroups: [
      {
        heading: 'The service helps to',
        items: [
          'Alleviate the risk of errors in verifying past employment and the cost of a bad hire through consistent research methodologies which achieve fast results',
          'Expedite the hiring process and reduce administrative costs by outsourcing time-consuming, tedious screening tasks to a specialized team of verifiers',
        ],
      },
    ],
  },
]

export const servicesByPillar: Record<Pillar, Service[]> = {
  consultancy: services.filter((s) => s.pillar === 'consultancy'),
  outsourcing: services.filter((s) => s.pillar === 'outsourcing'),
  hr: services.filter((s) => s.pillar === 'hr'),
}
