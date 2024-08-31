import {React,Suspense,useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import Xwing from '../Models/Xwing';
import Sky from '../Models/Sky';
import useAlert from '../Components/useAlert';
import Alert from '../Components/Alert';
import Loader from '../Components/Loader';


const Contact = () => {
    const [typing,setTyping] = useState(false)
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    console.log(process.env.REACT_APP_MY_EMAIL);
    
  
    const handleChange = ({ target: { name, value } }) => {
      setForm({ ...form, [name]: value });
    };
  
    const handleFocus = () => setTyping(true);
    const handleBlur = () => setTyping(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          //       form.current,
          {
            from_name: form.name,
            to_name: "Abhay Pratap",
            from_email: form.email,
            to_email: process.env.REACT_APP_MY_EMAIL,
            message: form.message,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            showAlert({
              show: true,
              text: "Thank you for your message 😃",
              type: "success",
            });
  
            setTimeout(() => {
              hideAlert(false);
              setTyping(false);
              setForm({
                name: "",
                email: "",
                message: "",
              });
            }, [3000]);
          },
          (error) => {
            setLoading(false);
            console.error(error);
            setTyping(false);
  
            showAlert({
              show: true,
              text: "I didn't receive your message 😢",
              type: "danger",
            });

            setTimeout(() => {
              hideAlert(false);
              setTyping(false);
              setForm({
                name: "",
                email: "",
                message: "",
              });
            }, [3000]);
          }
        );
    };



  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_9sv0fnr",
  //       "template_8m2d82a",
  //       form.current,
  //       "jj24Y1fYQ_D7lp8y9"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         alert("message sent successfully !");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };

  return (
    <section id='contact' className='relative lg:max-w-6xl lg:mx-auto w-full min-h-screen grid md:grid-cols-2 grid-cols-1  py-12 xl:px-10 md:px-3 lg:px-5 px-3 bg-black text-gray-300 mt-6 gap-10'>
      {alert.show && <Alert {...alert} />}

        <div className=' col-span-1 flex flex-col p-5'>
        <h1 className='sm:text-5xl text-center text-3xl font-semibold sm:leading-snug '>Get in Touch</h1>

        <form
        autocomplete="off"
          ref={formRef}
          onSubmit={sendEmail}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
        <div className='col-span-1 h-[60vh] xl:h-[65vh] md:h-[120vh] lg:h-[90vh] flex items-center  justify-center md:mt-16 lg:mt-28 xl:mt-28'>
         <Canvas  className={`bg-transparent w-full h-full`}
            camera={{ near: 0.1, far: 1000 }}
          >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={3} />
                <ambientLight intensity={2} />
                <pointLight position={[10, 5, 10]} intensity={1} />
                <spotLight
                  position={[0, 0, 0]}
                  angle={0.15}
                  penumbra={1}
                  intensity={1}
                />
                <hemisphereLight
                  skyColor='#b1e1ff'
                  groundColor='#000000'
                  intensity={1}
                />
                  {/* <ImageCube isRotating={isRotating} setCurrentStage={setCurrentStage} currenStage={currentStage} /> */}

                <Sky isRotating={typing} />
                <Xwing 
                  scale={[1.5,1.5,1.5]}
                  position={[-0.5,0,0]}
                  rotation={[1,2,0]}
                  typing={typing}
                />

            </Suspense>

          </Canvas>
         </div>
    </section>
  )
}

export default Contact
