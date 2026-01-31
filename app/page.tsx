'use client';

import { useState } from 'react';

interface TimelineItem {
  id: string;
  type: 'experience' | 'project';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  highlights?: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  keyCoursework: string[];
}

const educationData: Education = {
  degree: 'Bachelor of Computer Science',
  institution: 'University of Victoria',
  location: 'Victoria, BC',
  startDate: '2019-09',
  endDate: '2024-05',
  description: [
    'Acquired proficiency in Git version control while utilizing Python and C programming languages',
    'Developed expertise in artificial intelligence concepts, search algorithms, agent-based systems, and constraint satisfaction problems',
    'Introduced to supervised machine learning algorithms and model training/testing methodologies, including SVM classifiers and regression techniques',
    'Expanded knowledge of computer architecture, operating systems, algorithms and data structures, and programming techniques'
  ],
  keyCoursework: [
    'Music Information Retrieval (CSC475)',
    'Data Mining (SENG474)',
    'Intro to Artificial Intelligence (CSC421)',
    'Computer Architecture (CSC350)',
    'Digital Logic (CSC355)',
    'Operating Systems (CSC360)',
    'Computer Communications and Networks (CSC361)'
  ]
};

const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'experience' as const,
    title: 'Software Developer',
    organization: '8Twelve Mortgage Corp.',
    location: 'Toronto, ON',
    startDate: '2024-09',
    endDate: '2025-11',
    description: [
      'Designed and maintained ETL pipelines using AWS Glue to clean, normalize, and transform large PostgreSQL datasets used for analytics, dashboards, and regulatory reporting',
      'Developed new partner lead ingestion integrations and migrated legacy ingestion pipelines, improving throughput and strengthening the INFIN8 CRM\'s data accuracy',
      'Led the migration of the company\'s reporting platform from Power BI to AWS QuickSight, cutting infrastructure costs by $2,500 per month',
      'Built an automated mortgage renewal notification system for deal agents, contributing to a 50% increase in renewal leads year-over-year',
      'Cleaned and standardized client and deal data to support successful data migration into a rebuilt INFIN8 platform',
      'Collaborated with cross-functional teams to document requirements, validate data quality, and conduct code reviews during platform migration'
    ],
  },
  {
    id: '2',
    type: 'experience' as const,
    title: 'Software Developer (Intern)',
    organization: '8Twelve Mortgage Corp.',
    location: 'Toronto, ON',
    startDate: '2023-05',
    endDate: '2024-08',
    description: [
      'Designed and implemented an automated email system using Microsoft\'s Power Automate and Power BI that seamlessly delivers vital KPI reports directly to executives and stakeholders',
      'Leveraged various distributed AWS services (Glue ETL, Lambda, S3, Pinpoint) to streamline customer and client engagement by creating automated messaging systems and promotional email campaigns',
      'Maintained and updated a reporting webpage to display real-time reports'
    ],
  },
  {
    id: '3',
    type: 'project' as const,
    title: 'MIR Automated DJ Software',
    organization: 'Music Information Retrieval (CSC475)',
    startDate: '2024-01',
    endDate: '2024-04',
    description: [
      'Designed and developed an MIR program that renders a crossfade between songs by analyzing two songs and finding optimal transition points',
      'Utilized MIR Python libraries such as Librosa and Pydub for beat tracking, beat matching, and tempo matching',
    ],
    highlights: 'Received a final grade of 99% over 2 progress reports, final report, and final presentation'
  },
  {
    id: '4',
    type: 'experience' as const,
    title: 'Software Developer (Intern)',
    organization: 'Trellis Corp.',
    location: 'Kanata, ON',
    startDate: '2022-05',
    endDate: '2022-11',
    description: [
      'Developed a comprehensive Python unit test suite for seamless integration of a new e-commerce channel',
      'Utilized a Django REST framework to design and implement a sophisticated data collection and analysis tool, allowing for a new stream of revenue'
    ],
  },
  {
    id: '5',
    type: 'project' as const,
    title: 'Building an OS',
    organization: 'Operating Systems (CSC360)',
    startDate: '2022-01',
    endDate: '2022-04',
    description: [
      'Developed a \'train\' scheduler that represents a CPU scheduler that allocates \'loading\' and \'travel\' times between trains using shared tracks and stations by utilizing priority queues',
      'Designed a file system with basic repository traversal and execution',
      'Implemented asynchronous processing functionality'
    ],
  },
  {
    id: '6',
    type: 'experience' as const,
    title: 'Software Developer (Intern)',
    organization: 'Napoleon',
    location: 'Barrie, ON',
    startDate: '2021-05',
    endDate: '2021-08',
    description: [
      'Collaborated with the IT team in a large-scale ERP/data migration project, providing critical assistance throughout the implementation process',
      'Applied SQL skills to create mapping tables, load data, and generate barcodes for products, ensuring seamless data integration and streamlined operations',
      'Employed a .NET C# framework to update the invoice generator, enabling customized fee adjustments for specific customers'
    ],
  },
  {
    id: '7',
    type: 'project' as const,
    title: 'Blackjack Application',
    organization: 'Personal Project',
    startDate: '2020-05',
    endDate: '2020-05',
    description: [
      'Created an engaging blackjack application using Java in IntelliJ IDEA',
      'Utilized software engineering best practices to ensure optimal functionality and user experience'
    ],
  },
  {
    id: '8',
    type: 'project' as const,
    title: 'Computer Store Application',
    organization: 'Personal Project',
    startDate: '2020-02',
    endDate: '2020-02',
    description: [
      'Built a comprehensive user interface and backend system for a computer parts store using Java in IntelliJ IDEA',
      'Implemented inventory management and shopping cart functionality'
    ],
  },
].sort((a, b) => b.startDate.localeCompare(a.startDate));

const formatDate = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'experience':
      return 'bg-blue-500 dark:bg-blue-600';
    case 'project':
      return 'bg-purple-500 dark:bg-purple-600';
    default:
      return 'bg-gray-500';
  }
};

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case 'experience':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'project':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'experience' | 'project'>('all');

  const filteredData = filter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black font-sans">
      {/* Header */}
      <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Lukas Stinson
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Software Developer | Victoria, BC / Toronto, ON
              </p>
              <div className="flex gap-4 mt-2 text-sm">
                <a 
                  href="mailto:stinser01@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  stinser01@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/lukasstinson422/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/lustinson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                    : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('experience')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'experience'
                    ? 'bg-blue-600 text-white dark:bg-blue-600'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setFilter('project')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'project'
                    ? 'bg-purple-600 text-white dark:bg-purple-600'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800'
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            About
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I'm a software developer with experience across data integrations, cloud infrastructure, and full-stack development. I've worked in small teams and startup environments where I helped migrate platforms, build ETL pipelines, develop AWS-based integrations, and ship features quickly. I'm a fast learner who loves picking up new technologies, solving hard problems, and contributing wherever I can add value. I'm dedicated, adaptable, and always eager to take on new challenges that push my skills forward.
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                JavaScript/TypeScript
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                React.js
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                SQL
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                MS SQL Server
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                AWS S3
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                AWS Glue
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                AWS Lambda
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                AWS CDK
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                C
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                Django
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-600"></div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Education
            </h2>
          </div>
          
          <div className="border-l-4 border-green-500 dark:border-green-600 pl-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {educationData.degree}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  {educationData.institution}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {educationData.location}
                </p>
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                <time dateTime={educationData.startDate}>{formatDate(educationData.startDate)}</time>
                {' - '}
                <time dateTime={educationData.endDate}>{formatDate(educationData.endDate)}</time>
              </div>
            </div>

            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 mb-4">
              {educationData.description.map((desc, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-zinc-400 dark:text-zinc-600 leading-[1.75rem]">•</span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.keyCoursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Experience & Projects
          </h2>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {filteredData.map((item, index) => (
              <article key={item.id} className="relative pl-20 group">
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 top-2 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-950 ${getTypeColor(
                    item.type
                  )} group-hover:scale-125 transition-transform`}
                ></div>

                {/* Card */}
                <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium uppercase ${getTypeBadgeColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.organization}
                      </p>
                      {item.location && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {item.location}
                        </p>
                      )}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      <time dateTime={item.startDate}>{formatDate(item.startDate)}</time>
                      {' - '}
                      <time dateTime={item.endDate}>{formatDate(item.endDate)}</time>
                    </div>
                  </div>

                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="text-zinc-400 dark:text-zinc-600 leading-[1.5rem]">•</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {item.highlights && (
                    <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        {item.highlights}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2026 Lukas Stinson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
