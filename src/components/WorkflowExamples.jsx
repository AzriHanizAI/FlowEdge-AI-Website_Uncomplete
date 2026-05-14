import React from 'react';

const workflows = [
  {
    title: 'Lead Capture & CRM Integration',
    description: 'Streamline your onboarding process with automated workflows that save time and reduce errors.',
  },
  {
    title: 'Customer Support Ticket Management',
    description: 'Automate the creation and distribution of content briefs to improve efficiency and consistency.',
  },
  {
    title: 'Appointment Setting',
    description: 'Set up automated project management workflows to keep your team on track and organized.',
  },
  {
    title: 'Email Outreach Automation',
    description: 'Automate the creation of proposals to speed up your sales process and improve accuracy.',
  },
  {
    title: 'Social Media Automation',
    description: 'Automate repetitive tasks in your sales process to focus on closing deals.',
  },
];

const WorkflowExamples = () => {
    return (
      <section id="workflow-examples" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-navy mb-4">
              Examples of Workflows We’ve Automated
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the workflows we’ve automated to help businesses save time and improve efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-navy mb-4">{workflow.title}</h3>
                <p className="text-gray-600 mb-6">{workflow.description}</p>
                <div className="flex space-x-4">
  <button className="bg-electric-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
    Example
  </button>
  <button
    className="text-white px-4 py-2 rounded-lg transition-colors"
    style={{ backgroundColor: '#008080' }}
  >
    Service Processes
  </button>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkflowExamples;