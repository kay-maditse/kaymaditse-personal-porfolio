/* ─────────────────────────────────────────
   TERMINAL.JS — Interactive Terminal Logic
   ───────────────────────────────────────── */

const commands = {
  help: {
    output: [
      { t: 'blue',  txt: 'Available commands:' },
      { t: 'green', txt: '  skills        — View technical competencies' },
      { t: 'green', txt: '  certs         — List certifications' },
      { t: 'green', txt: '  projects      — Show deployed systems' },
      { t: 'green', txt: '  about         — Engineer profile' },
      { t: 'green', txt: '  contact       — Get in touch' },
      { t: 'green', txt: '  aws           — AWS services knowledge' },
      { t: 'green', txt: '  whoami        — Identity check' },
      { t: 'green', txt: '  clear         — Clear terminal' },
    ]
  },
  whoami: {
    output: [
      { t: 'white', txt: 'Kay Kelebogile Maditse' },
      { t: 'blue',  txt: 'Role     : Cloud Engineer | Junior Web Developer Intern' },
      { t: 'blue',  txt: 'Location : Johannesburg, Gauteng, South Africa' },
      { t: 'blue',  txt: 'Status   : Open to Cloud Learnerships' },
      { t: 'green', txt: 'Clearance: AWS Certified Cloud Practitioner' },
    ]
  },
  skills: {
    output: [
      { t: 'amber',  txt: '[ CLOUD ]      Lambda · S3 · DynamoDB · API Gateway · CloudFront · Route 53' },
      { t: 'purple', txt: '[ DEVOPS ]     GitHub · CodePipeline · CodeBuild · CI/CD · IaC' },
      { t: 'green',  txt: '[ OS/LINUX ]   Bash · CLI · Shell Scripting · Process Management' },
      { t: 'blue',   txt: '[ NETWORKING ] DNS · TCP/IP · VPC · Subnets · CIDR · Firewalls' },
      { t: 'white',  txt: '[ DEV ]        Python · JavaScript · HTML · CSS · Node.js' },
    ]
  },
  certs: {
    output: [
      { t: 'green', txt: '✓ AWS Certified Cloud Practitioner' },
      { t: 'green', txt: '✓ AWS re/Start Graduate' },
      { t: 'green', txt: '✓ Full Stack JavaScript Developer (Coursera)' },
      { t: 'green', txt: '✓ Python Programming Certification (Coursera)' },
      { t: 'green', txt: '✓ AI & Quality Assurance Certificate' },
      { t: 'green', txt: '✓ Full Stack Developer Apprenticeship (Umuzi Academy)' },
      { t: 'blue',  txt: '↳ In Progress: AWS Solutions Architect Associate' },
    ]
  },
  projects: {
    output: [
      { t: 'blue',   txt: '01 · Intelligent Contact & Enquiry Engine       [Lambda · SES · API GW]' },
      { t: 'blue',   txt: '02 · Global Visitor Telemetry System            [DynamoDB · Lambda]' },
      { t: 'amber',  txt: '03 · Serverless Banking Alert & Fraud System   [Lambda · SNS · DynamoDB]' },
      { t: 'purple', txt: '04 · Secure Cloud File Upload Portal           [S3 · CloudFront · IAM]' },
      { t: 'green',  txt: '05 · Automated Cloud Deployment Pipeline       [CodePipeline · CodeBuild]' },
      { t: 'green',  txt: '06 · AWS Cloud Knowledge Assessment Engine     [DynamoDB · Lambda]' },
    ]
  },
  contact: {
    output: [
      { t: 'blue',  txt: 'Email    : maditse.kay.kelebogile@gmail.com' },
      { t: 'blue',  txt: 'LinkedIn : linkedin.com/in/kay-maditse' },
      { t: 'blue',  txt: 'GitHub   : github.com/kay-maditse' },
      { t: 'muted', txt: 'Location : Johannesburg, Gauteng, South Africa' },
    ]
  },
  aws: {
    output: [
      { t: 'amber',  txt: 'COMPUTE   : Lambda (serverless) · EC2 · Elastic Beanstalk' },
      { t: 'blue',   txt: 'STORAGE   : S3 · DynamoDB · RDS' },
      { t: 'green',  txt: 'NETWORK   : VPC · Route 53 · CloudFront · API Gateway' },
      { t: 'purple', txt: 'SECURITY  : IAM · Cognito · Security Groups · KMS' },
      { t: 'white',  txt: 'OPS       : CloudWatch · EventBridge · SNS · SES · CodePipeline' },
    ]
  },
  about: {
    output: [
      { t: 'white', txt: 'Cloud engineer driven by scalability, automation, and innovation.' },
      { t: 'muted', txt: 'Fascinated by serverless architecture and event-driven systems.' },
      { t: 'blue',  txt: 'AWS re/Start Graduate | Cloud Practitioner Certified' },
      { t: 'blue',  txt: 'Currently: Junior Web Developer Intern @ CAPACITI' },
      { t: 'green', txt: 'Goal: Solutions Architect | Aspiring CTO' },
    ]
  },
};

function openTerminal() {
  document.getElementById('terminal-modal').classList.add('open');
  document.getElementById('terminal-input').focus();
}

function closeTerminal() {
  document.getElementById('terminal-modal').classList.remove('open');
}

document.getElementById('terminal-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('terminal-modal')) closeTerminal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTerminal();
});

document.getElementById('terminal-input').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  const val = e.target.value.trim().toLowerCase();
  e.target.value = '';
  const out = document.getElementById('terminal-output');

  const prompt = document.createElement('div');
  prompt.className = 't-line';
  prompt.innerHTML = `<span class="t-green">kay@portfolio:~$</span> <span class="t-white">${val}</span>`;
  out.appendChild(prompt);

  if (val === 'clear') {
    out.innerHTML = '';
    return;
  }

  const cmd = commands[val];
  if (cmd) {
    cmd.output.forEach((line) => {
      const d = document.createElement('div');
      d.className = `t-line t-${line.t}`;
      d.textContent = line.txt;
      out.appendChild(d);
    });
  } else if (val !== '') {
    const d = document.createElement('div');
    d.className = 't-line t-muted';
    d.innerHTML = `Command not found: <span class="t-blue">${val}</span>. Type <span class="t-blue">help</span> for options.`;
    out.appendChild(d);
  }

  const br = document.createElement('div');
  br.className = 't-line';
  br.innerHTML = '&nbsp;';
  out.appendChild(br);

  out.scrollTop = out.scrollHeight;
}); 