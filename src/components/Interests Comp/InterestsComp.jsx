import React, { memo, useCallback, useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const InterestsComp = memo(({ interests, setInterests, placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const [resuts, setResults] = useState([]);
  const techInterests = useMemo(
    () => [
      "Web Development",
      "Mobile Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Data Science",
      "Cybersecurity",
      "Cloud Computing",
      "DevOps",
      "Internet of Things (IoT)",
      "Blockchain Technology",
      "Augmented Reality (AR)",
      "Virtual Reality (VR)",
      "Game Development",
      "Software Engineering",
      "Network Engineering",
      "Database Management",
      "Big Data",
      "Quantum Computing",
      "Robotics",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Bioinformatics",
      "Human-Computer Interaction (HCI)",
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      "Product Management",
      "IT Project Management",
      "Systems Architecture",
      "Embedded Systems",
      "Automation Testing",
      "Quality Assurance (QA)",
      "Agile Methodologies",
      "IT Support and Services",
      "Technical Writing",
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "E-commerce Development",
      "Software as a Service (SaaS)",
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Computer Graphics",
      "Animation",
      "Content Management Systems (CMS)",
      "Open Source Contributions",
      "Tech Entrepreneurship",
      "FinTech",
      "HealthTech",
      "EdTech",
      "LegalTech",
      "Wearable Technology",
      "Smart Home Technology",
      "5G Technology",
      "Edge Computing",
      "Sustainable Technology",
      "Tech Policy and Ethics",
      "Digital Transformation",
      "IT Consulting",
    ],
    []
  );

  const govtExamInterests = useMemo(
    () => [
      "Union Public Service Commission (UPSC)",
      "Staff Selection Commission (SSC)",
      "Railway Recruitment Board (RRB)",
      "Institute of Banking Personnel Selection (IBPS)",
      "State Public Service Commission (SPSC)",
      "Defence Services Examinations (NDA, CDS)",
      "Police Recruitment Exams",
      "Teaching Eligibility Tests (TET)",
      "Public Sector Undertaking (PSU) Exams",
      "Insurance Exams (LIC, GIC)",
      "Reserve Bank of India (RBI) Exams",
      "Indian Engineering Services (IES)",
      "Indian Administrative Services (IAS)",
      "Indian Police Services (IPS)",
      "Indian Foreign Services (IFS)",
      "Indian Revenue Services (IRS)",
      "Indian Forest Services (IFoS)",
      "Graduate Aptitude Test in Engineering (GATE) for PSUs",
      "Combined Defence Services (CDS)",
      "Intelligence Bureau (IB) Exams",
      "Border Security Force (BSF) Exams",
      "Central Industrial Security Force (CISF) Exams",
      "Central Reserve Police Force (CRPF) Exams",
      "Territorial Army Exams",
      "Indian Coast Guard Exams",
      "Central Armed Police Forces (CAPF) Exams",
      "Banking Exams (SBI, RBI, IBPS)",
      "Judicial Services Exams",
      "Combined Medical Services (CMS) Exam",
      "Indian Economic Service (IES) Exam",
      "Indian Statistical Service (ISS) Exam",
      "Indian Railway Traffic Service (IRTS)",
      "Indian Railway Accounts Service (IRAS)",
      "Indian Railway Personnel Service (IRPS)",
      "Indian Trade Service (ITS)",
      "Indian Corporate Law Service (ICLS)",
      "Indian Information Service (IIS)",
      "Indian Defence Accounts Service (IDAS)",
      "Indian Ordnance Factories Service (IOFS)",
      "Indian Audit and Accounts Service (IAAS)",
      "Indian Postal Service",
      "Central Secretariat Service (CSS)",
      "Delhi, Andaman and Nicobar Islands Civil Service (DANICS)",
      "Delhi, Andaman and Nicobar Islands Police Service (DANIPS)",
      "Combined Higher Secondary Level (CHSL) Exam",
      "Multi-Tasking Staff (MTS) Exam",
      "Food Corporation of India (FCI) Exams",
      "National Thermal Power Corporation (NTPC) Exams",
      "Bharat Heavy Electricals Limited (BHEL) Exams",
      "Gas Authority of India Limited (GAIL) Exams",
      "National Mineral Development Corporation (NMDC) Exams",
      "Oil and Natural Gas Corporation (ONGC) Exams",
      "Steel Authority of India Limited (SAIL) Exams",
      "Bharat Electronics Limited (BEL) Exams",
      "Indian Space Research Organisation (ISRO) Exams",
      "Defence Research and Development Organisation (DRDO) Exams",
      "National Hydroelectric Power Corporation (NHPC) Exams",
      "Bharat Sanchar Nigam Limited (BSNL) Exams",
      "Indian Oil Corporation Limited (IOCL) Exams",
      "State-Level Judicial Service Exams",
    ],
    []
  );

  const searchHandle = useCallback((e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const result = techInterests.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(result);
  }, []);

  const addInterest = useCallback((e) => {
    const interest = e.target.innerText;
    setInterests((prevState) => [...prevState, interest]);
    setSearchText("");
    setResults([]);
  });

  const deleteInterest = useCallback((e) => {
    const interest = e.target.previousElementSibling.innerText;
    setInterests((prevState) => {
      const oldInterests = [...prevState];
      oldInterests.splice(oldInterests.indexOf(interest), 1);
      return oldInterests;
    });
  }, []);

  return (
    <div className="flex flex-col gap-4 flex-1 sm:min-w-72 -w-full">
      <div key={"searchContainer"} className="relative w-fit overflow-visible">
        <input
          type="text"
          value={searchText}
          onChange={searchHandle}
          placeholder={`Search ${placeholder || "interests or hobbies"}`}
          className="border-2 border-b-black border-transparent focus:border-black p-2 px-4  w-full transition-all duration-300 outline-none rounded-none focus:rounded-xl"
        />
        {searchText.trim() !== "" && (
          <div className="w-full max-h-40 overflow-y-auto absolute top-full bg-white rounded-xl overflow-hidden">
            <p
              key={"createNewInterest"}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={addInterest}
            >
              {searchText}
            </p>
            {resuts.map((elem) => {
              return (
                <p
                  key={elem}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={addInterest}
                >
                  {elem}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div className="p-4 shadow-[inset_0_0_6px_gray] rounded-xl flex gap-2 flex-wrap h-40 w-full flex-1 overflow-y-auto">
        {interests.length !== 0 ? (
          interests.map((elem) => {
            return (
              <div
                className="flex items-center px-2 gap-2 rounded-full bg-gray-200 h-fit"
                key={elem}
              >
                <p className="p-1">{elem}</p>
                <RxCross2 size="2rem" className="cursor-pointer p-2" onClick={deleteInterest} />
              </div>
            );
          })
        ) : (
          <div>No {placeholder || "interests or hobbies"} added yet!</div>
        )}
      </div>
    </div>
  );
});
export default InterestsComp;
