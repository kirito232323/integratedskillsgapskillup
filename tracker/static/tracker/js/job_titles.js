document.addEventListener("DOMContentLoaded", () => {
    const jobTitles = [
        "Software Developer", "Junior Software Developer", "Senior Software Developer", "Full Stack Developer", "Frontend Engineer",
        "Backend Engineer", "Junior Backend Developer", "Senior Backend Developer", "Mobile App Developer", "iOS Developer",
        "Android Developer", "Web Developer", "Junior Web Developer", "UI/UX Designer", "UX Researcher", "UX Designer",
        "Graphic Designer", "Product Designer", "Data Scientist", "Data Analyst", "Junior Data Analyst", "Business Intelligence Analyst",
        "Machine Learning Engineer", "AI Engineer", "DevOps Engineer", "Cloud Engineer", "Senior Cloud Architect",
        "Systems Administrator", "Network Administrator", "Network Engineer", "IT Support Specialist", "Technical Support Representative",
        "Help Desk Technician", "Cybersecurity Analyst", "Information Security Officer", "QA Engineer", "Software Tester",
        "Database Administrator", "Computer Systems Technician", "IT Project Manager", "Scrum Master", "Product Manager", "Technical Writer",
        "Customer Service Representative", "Customer Support Associate", "Technical Support Agent", "Call Center Agent", "Chat Support Agent",
        "Email Support Specialist", "Collections Agent", "Sales Representative", "Telemarketer", "Team Leader — BPO",
        "Quality Assurance Analyst — BPO", "Account Manager", "Back Office Associate", "Data Entry Specialist", "Content Moderator",
        "Virtual Assistant", "Social Media Moderator", "Fraud Analyst", "Billing Specialist", "Appointment Setter", "Administrative Assistant",
        "Executive Assistant", "Office Clerk", "Receptionist", "Secretary", "Records Officer", "Document Controller", "Encoder / Data Entry Clerk",
        "Payroll Clerk", "Billing Clerk", "Accounting Clerk", "Bookkeeper", "Purchasing Officer", "Procurement Assistant",
        "Logistics Coordinator", "Supply Chain Assistant", "Office Manager", "General Affairs Officer", "Administrative Officer",
        "Liaison Officer", "Permits & Compliance Officer", "Accounting Assistant", "Junior Accountant", "Senior Accountant",
        "Accounts Payable Specialist", "Accounts Receivable Specialist", "Payroll Specialist", "Internal Auditor", "External Auditor",
        "Tax Compliance Officer", "Finance Analyst", "Budget Analyst", "Cost Accountant", "Treasury Assistant", "Financial Controller",
        "Chief Accountant", "Certified Public Accountant (CPA)", "Sales Associate", "Sales Representative", "Field Sales Agent",
        "Account Executive", "Business Development Officer", "Marketing Assistant", "Marketing Officer", "Digital Marketing Specialist",
        "Social Media Manager", "Content Creator", "Content Writer", "SEO Specialist", "Email Marketing Specialist", "Brand Ambassador",
        "Promotions Staff", "Trade Marketing Assistant", "Market Research Analyst", "Advertising Coordinator", "Media Buyer", "Events Coordinator",
        "Retail Sales Associate", "Store Cashier", "Store Supervisor", "Store Manager", "Merchandiser", "Visual Merchandiser",
        "Inventory Controller", "Stock Clerk", "Receiving Staff", "Pricing & Labeling Staff", "Loss Prevention Officer", "Mall Promotions Staff",
        "Product Demonstrator", "Food Service Crew", "Kitchen Crew", "Cook / Chef", "Pastry Chef", "Barista", "Waiter / Waitress",
        "Bartender", "Restaurant Supervisor", "Restaurant Manager", "Fast Food Counter Crew", "Dishwasher / Kitchen Utility", "Catering Staff",
        "Banquet Server", "Hotel Front Desk Officer", "Hotel Concierge", "Housekeeping Attendant — Hotel", "Laundry Attendant", "Room Attendant",
        "Bellboy / Bellman", "Food & Beverage Supervisor", "Catering Coordinator", "Nursing Aide", "Caregiver", "Medical Receptionist",
        "Medical Records Clerk", "Pharmacy Assistant", "Laboratory Aide", "Dental Assistant", "Midwife Assistant", "Barangay Health Worker",
        "Hospital Utility Worker", "Patient Care Assistant", "Medical Transcriptionist", "Clinic Coordinator", "Occupational Health Nurse",
        "Registered Nurse", "Physical Therapy Aide", "Radiologic Technologist Assistant", "Medical Biller / Coder", "Teacher Aide",
        "Teaching Assistant", "Preschool Teacher", "Elementary Teacher", "High School Teacher", "College Instructor", "Tutor",
        "Training Coordinator", "Corporate Trainer", "Curriculum Developer", "Librarian Assistant", "School Administrative Staff",
        "Guidance Associate", "Educational Support Staff", "Daycare Worker / Child Minder", "Civil Engineer (Entry Level)",
        "Structural Engineer Assistant", "Mechanical Engineer (Entry Level)", "Electrical Engineer (Entry Level)", "AutoCAD Draftsman",
        "Estimator / Quantity Surveyor Assistant", "Site Engineer", "Construction Foreman", "Project Engineer", "Safety Officer",
        "Building Inspector", "Surveying Assistant", "Maintenance Engineer", "HVAC Technician", "Facilities Engineer", "Electrician",
        "Electrical Installer", "Electrical Maintenance Technician", "Electronics Technician", "Appliance Repair Technician", "Solar Panel Installer",
        "Instrumentation Technician", "Control Systems Technician", "Electrical Wireman", "Automotive Mechanic", "Auto Electrician",
        "Automotive Service Advisor", "Motorcycle Mechanic", "Heavy Equipment Operator", "Diesel Mechanic", "Machinist", "CNC Machine Operator",
        "Welder — MIG/TIG", "Pipefitter", "Sheet Metal Worker", "Industrial Maintenance Technician", "Pump & Compressor Technician",
        "TESDA Structural Welder", "TESDA Shielded Metal Arc Welder", "TESDA Housekeeping Attendant", "TESDA Cookery NC II Worker",
        "TESDA Bread & Pastry Production Worker", "TESDA Food & Beverage Service Worker", "TESDA Electrical Installation Technician",
        "TESDA Plumbing Technician", "TESDA Carpentry Worker", "TESDA Tile Setting Worker", "TESDA Masonry Worker",
        "TESDA Automotive Servicing Technician", "TESDA Motorcycle Servicing Technician", "TESDA Computer Systems Servicing Technician",
        "TESDA Caregiving Worker", "TESDA Health Care Services Worker", "TESDA Beauty Care Worker", "TESDA Nail Care Technician",
        "TESDA Barbering Worker", "TESDA Dressmaking & Tailoring Worker", "TESDA Contact Center Services Agent", "TESDA Agricultural Crops Production Worker",
        "TESDA Driving NC II Driver", "Warehouse Staff", "Warehouse Supervisor", "Warehouse Manager", "Forklift Operator", "Inventory Clerk",
        "Stockroom Assistant", "Logistics Assistant", "Delivery Rider", "Delivery Driver", "Courier", "Dispatcher", "Freight Coordinator",
        "Customs Documentation Clerk", "Cold Storage Worker", "Quality Control Inspector", "Packer / Labeler", "Shipping & Receiving Clerk",
        "Security Guard", "Security Supervisor", "CCTV Operator", "Loss Prevention Officer", "Fire Safety Officer", "Safety & Health Officer (SHO)",
        "Traffic Controller", "Bodyguard / Close-In Security", "Janitor / Janitress", "Housekeeping Staff", "Utility Worker",
        "Groundskeeper / Gardener", "Pest Control Technician", "Laundry Staff", "Maintenance Crew", "Building Maintenance Technician",
        "Aircon Cleaning Technician", "Pool Maintenance Technician", "Disinfection & Sanitation Worker", "Professional Driver",
        "Light Vehicle Driver", "Heavy Truck Driver", "Bus Driver", "Shuttle Service Driver", "Motorcycle Courier / Rider", "Chauffeur",
        "Delivery Driver", "Taxi / Ride-Hailing Driver", "Airport Shuttle Driver", "Sewing Machine Operator", "Garments Quality Checker",
        "Pattern Maker", "Fabric Cutter", "Embroidery Technician", "Production Line Worker", "Assembly Line Worker", "Packaging Staff",
        "Machine Operator", "Factory Worker", "Production Supervisor", "Farm Worker", "Crop Production Worker", "Livestock Handler",
        "Aquaculture Worker", "Agricultural Technician", "Organic Farm Assistant", "Environmental Aide", "Nursery Worker", "Irrigation Technician",
        "Post-Harvest Technician", "Domestic Helper — Hong Kong", "Domestic Helper — Singapore", "Domestic Helper — Middle East",
        "Factory Worker — Japan", "Factory Worker — South Korea", "Construction Worker — Middle East", "Caregiver — Canada", "Caregiver — Israel",
        "Hotel Staff — Middle East", "Restaurant Crew — Middle East", "Welder — Middle East", "Electrical Worker — Middle East",
        "Farm Worker — Canada", "Farm Worker — Japan", "Seaman / Seafarer — Deck Rating", "Seaman / Seafarer — Engine Rating", "Cruise Ship Crew",
        "Au Pair — Europe"
    ];

    // Create the datalist
    const datalist = document.createElement("datalist");
    datalist.id = "peso-job-titles";
    jobTitles.forEach(title => {
        const option = document.createElement("option");
        option.value = title;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);

    // Apply the datalist to matching input elements
    const inputsToBind = [
        document.getElementById("position"),
        document.getElementById("ojt_position"),
        ...Array.from(document.querySelectorAll("input[name='title']")),
        ...Array.from(document.querySelectorAll("input[name='position']"))
    ];

    inputsToBind.forEach(el => {
        if (el) {
            el.setAttribute("list", "peso-job-titles");
            el.setAttribute("autocomplete", "off"); // disable standard browser autocomplete to prioritize datalist
            if (!el.placeholder) {
                el.placeholder = "Type to search job titles...";
            }
        }
    });
});
