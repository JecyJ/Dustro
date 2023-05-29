import Button from "@components/reusable files/Button";


const Form = () => {
  return (
    <section className="relative w-full h-auto mt-20 md:mt-64">
        <form className="max-w-[400px] md:max-w-[1000px] mx-auto space-y-3">
           <div className="grid grid-cols-2 grid-row-5 gap-3">
                <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="fullname" placeholder="Your Full Name" name="fullname" />
                <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="email" placeholder="Your Email Address" name="email" />
                <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="tel" placeholder="Your Phone Number" name="phone" />
                <input className="shadow-2xl rounded-2xl h-8 p-5 border border-slate-200" type="address" placeholder="Your Address" name="address" />
                <textarea className="col-span-2 row-span-2 shadow-2xl rounded-2xl p-5 border border-slate-200" type="textarea" rows={5} cols={33} placeholder="Enter Your Message Here" name="message" />
           </div>
           <Button>Submit Message</Button>
        </form>
    </section>
  )
}

export default Form;