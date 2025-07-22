'use client';

import { useState } from 'react';
import {
  User, Phone, Mail, MapPin,
  FileText, BookUser, MessageSquare,
  CreditCard, CalendarDays, Video, GraduationCap, Info, PhoneCall
} from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    course: '',
    interest: '',
    contact: '',
    email: '',
    location: '',
    transactionId: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    const phoneRegex = /^03\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name &&
      formData.fatherName &&
      formData.course &&
      formData.interest &&
      phoneRegex.test(formData.contact) &&
      emailRegex.test(formData.email) &&
      formData.location &&
      formData.transactionId
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      alert("Please fill all required fields correctly (valid contact, email, transaction ID).");
      return;
    }

    const message = `New Registration:\n\nName: ${formData.name}\nFather Name: ${formData.fatherName}\nCourse: ${formData.course}\nInterest: ${formData.interest}\nContact: ${formData.contact}\nEmail: ${formData.email}\nLocation: ${formData.location}\nTransaction ID: ${formData.transactionId}\nMessage: ${formData.message || "N/A"}\n\nFee: 500 PKR`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923291230536?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-xl p-6 sm:p-8 space-y-6 animate-fade-in">

        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Course Registration
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">Powered by <span className="font-semibold text-indigo-600">Elite Digital Solution</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
              {/* Info Section */}
          <div className="bg-indigo-50/80 p-4 rounded-lg border border-indigo-100 text-indigo-700 text-sm sm:text-base font-medium space-y-2">
            <p className="text-center font-semibold text-indigo-800">📢 Registrations Now Open!</p>
            <ul className="space-y-1 pl-4">
              <li className="flex items-center gap-2">
                <CalendarDays size={18} className="text-indigo-600" />
                <span>Classes start from <strong>16th August</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Video size={18} className="text-indigo-600" />
                <span>Live on <strong>Zoom & Google Meet</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-600" />
                <span>Learn <strong>professional skills from home</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={18} className="text-indigo-600" />
                <span>For more info, contact <strong>Elite Digital Solution</strong></span>
              </li>
            </ul>
          </div> 

          {/* Input Fields */}
          {[
            { id: 'name', label: 'Full Name', icon: <User size={18} color="black" /> },
            { id: 'fatherName', label: "Father's Name", icon: <BookUser size={18} color="black" /> },
            { id: 'course', label: 'Course', icon: <FileText size={18} color="black" /> },
            { id: 'location', label: 'Location', icon: <MapPin size={18} color="black" /> }
          ].map(({ id, label, icon }) => (
            <div key={id} className="space-y-1">
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
                {icon}
                <input
                  id={id}
                  name={id}
                  type="text"
                  placeholder={`Enter ${label.toLowerCase()}`}
                  value={(formData as any)[id]}
                  onChange={handleInputChange}
                  required
                  className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
                />
              </div>
            </div>
          ))}

          {/* Interest Dropdown */}
          <div className="space-y-1">
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your interest</option>
              <option value="Web Designing">Web Designing</option>
              <option value="Shopify">Shopify</option>
              <option value="SEO">SEO</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="Run Ads">Run Ads</option>
              <option value="Drop-Shipping">Drop-Shipping</option>
            </select>
          </div>

          {/* Contact & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
                <Phone size={18} color="black" />
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
                <Mail size={18} color="black" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* SadaPay Info */}
          <div className="bg-black text-white p-4 rounded-lg text-center text-sm sm:text-base font-semibold border border-gray-800">
            Send 500 PKR to <strong>SADA Pay: 0323 6762115</strong>
          </div>

          {/* Transaction ID */}
          <div className="space-y-1">
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
              <CreditCard size={18} color="black" />
              <input
                id="transactionId"
                name="transactionId"
                type="text"
                placeholder="Enter transaction ID"
                value={formData.transactionId}
                onChange={handleInputChange}
                required
                className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Optional Message */}
          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
            <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
              <MessageSquare className="mt-1" size={18} color="black" />
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Optional message..."
                value={formData.message}
                onChange={handleInputChange}
                className="ml-2 w-full bg-transparent text-black focus:outline-none resize-none"
              />
            </div>
          </div>
{/* 
           Info Section */}
          {/* <div className="bg-indigo-50/80 p-4 rounded-lg border border-indigo-100 text-indigo-700 text-sm sm:text-base font-medium space-y-2">
            <p className="text-center font-semibold text-indigo-800">📢 Registrations Now Open!</p>
            <ul className="space-y-1 pl-4">
              <li className="flex items-center gap-2">
                <CalendarDays size={18} className="text-indigo-600" />
                <span>Classes start from <strong>16th August</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Video size={18} className="text-indigo-600" />
                <span>Live on <strong>Zoom & Google Meet</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-600" />
                <span>Learn <strong>professional skills from home</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={18} className="text-indigo-600" />
                <span>For more info, contact <strong>Elite Digital Solution</strong></span>
              </li>
            </ul>
          </div>  */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;



// 'use client';

// import { useState } from 'react';
// import {
//   User, Phone, Mail, MapPin,
//   FileText, BookUser, MessageSquare, CreditCard
// } from 'lucide-react';

// const Index = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fatherName: '',
//     course: '',
//     interest: '',
//     contact: '',
//     email: '',
//     location: '',
//     transactionId: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isValid = () => {
//     const phoneRegex = /^03\d{9}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return (
//       formData.name &&
//       formData.fatherName &&
//       formData.course &&
//       formData.interest &&
//       phoneRegex.test(formData.contact) &&
//       emailRegex.test(formData.email) &&
//       formData.location &&
//       formData.transactionId
//     );
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!isValid()) {
//       alert("Please fill all required fields correctly (valid contact, email, transaction ID).");
//       return;
//     }

//     const message = `New Registration:\n\nName: ${formData.name}\nFather Name: ${formData.fatherName}\nCourse: ${formData.course}\nInterest: ${formData.interest}\nContact: ${formData.contact}\nEmail: ${formData.email}\nLocation: ${formData.location}\nTransaction ID: ${formData.transactionId}\nMessage: ${formData.message || "N/A"}\n\nFee: 500 PKR`;
//     const encodedMsg = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/923291230536?text=${encodedMsg}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
//       <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl rounded-xl p-6 sm:p-8 space-y-6 animate-fade-in">

//         <div className="text-center space-y-1">
//           <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Course Registration
//           </h1>
//           <p className="text-gray-600 text-sm sm:text-base">Join our professional development courses</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Text Inputs with Black Icons & Text */}
//           {[
//             { id: 'name', label: 'Full Name', icon: <User size={18} color="black" /> },
//             { id: 'fatherName', label: "Father's Name", icon: <BookUser size={18} color="black" /> },
//             { id: 'course', label: 'Course', icon: <FileText size={18} color="black" /> },
//             { id: 'location', label: 'Location', icon: <MapPin size={18} color="black" /> }
//           ].map(({ id, label, icon }) => (
//             <div key={id} className="space-y-1">
//               <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
//               <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//                 {icon}
//                 <input
//                   id={id}
//                   name={id}
//                   type="text"
//                   placeholder={`Enter ${label.toLowerCase()}`}
//                   value={(formData as any)[id]}
//                   onChange={handleInputChange}
//                   required
//                   className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
//                 />
//               </div>
//             </div>
//           ))}

//           {/* Interest Dropdown */}
//           <div className="space-y-1">
//             <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
//             <select
//               id="interest"
//               name="interest"
//               value={formData.interest}
//               onChange={handleInputChange}
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="">Select your interest</option>
//               <option value="Web Designing">Web Designing</option>
//               <option value="Shopify">Shopify</option>
//               <option value="SEO">SEO</option>
//               <option value="Digital Marketing">Digital Marketing</option>
//               <option value="Freelancing">Freelancing</option>
//               <option value="Ecommerce">Ecommerce</option>
//               <option value="Run Ads">Run Ads</option>
//               <option value="Drop-Shipping">Drop-Shipping</option>
//             </select>
//           </div>

//           {/* Contact & Email */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-1">
//               <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
//               <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//                 <Phone size={18} color="black" />
//                 <input
//                   id="contact"
//                   name="contact"
//                   type="tel"
//                   placeholder="03XXXXXXXXX"
//                   value={formData.contact}
//                   onChange={handleInputChange}
//                   required
//                   className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//               <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//                 <Mail size={18} color="black" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="your.email@example.com"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* 💳 SadaPay Info (Dark Black) */}
//           <div className="bg-black text-white p-4 rounded-lg text-center text-sm sm:text-base font-semibold border border-gray-800">
//             Send 500 PKR to <strong>SADA Pay: 0323 6762115</strong>
//           </div>

//           {/* Transaction ID */}
//           <div className="space-y-1">
//             <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
//             <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//               <CreditCard size={18} color="black" />
//               <input
//                 id="transactionId"
//                 name="transactionId"
//                 type="text"
//                 placeholder="Enter transaction ID"
//                 value={formData.transactionId}
//                 onChange={handleInputChange}
//                 required
//                 className="ml-2 flex-1 bg-transparent text-black focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Message (optional) */}
//           <div className="space-y-1">
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
//             <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
//               <MessageSquare className="mt-1" size={18} color="black" />
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={3}
//                 placeholder="Optional message..."
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className="ml-2 w-full bg-transparent text-black focus:outline-none resize-none"
//               />
//             </div>
//           </div>

//           {/* Classes Info */}
//           <div className="bg-indigo-50/80 p-4 rounded-lg text-center border border-indigo-100 text-indigo-700 text-sm sm:text-base font-medium">
//            Registrations are Now Open!

// Classes begin from 16th August and will be conducted online via Zoom and Google Meet. Don't miss this opportunity to learn professional skills from the comfort of your home!          </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Submit Registration
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Index;

