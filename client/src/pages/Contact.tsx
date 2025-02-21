import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2DD4BF] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#F8FAFC]/60 max-w-2xl mx-auto">
            Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#2DD4BF] h-6 w-6" />
                <div>
                  <h3 className="font-medium text-[#F8FAFC]">Location</h3>
                  <p className="text-[#F8FAFC]/60">Mirpurkhas Sindh, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#2DD4BF] h-6 w-6" />
                <div>
                  <h3 className="font-medium text-[#F8FAFC]">Phone</h3>
                  <p className="text-[#F8FAFC]/60">(+92) 3133850871</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-[#2DD4BF] h-6 w-6" />
                <div>
                  <h3 className="font-medium text-[#F8FAFC]">Email</h3>
                  <p className="text-[#F8FAFC]/60">farooquemalik50871@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  className="bg-[#1E293B] border-[#2DD4BF]/10 focus:border-[#2DD4BF]"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="bg-[#1E293B] border-[#2DD4BF]/10 focus:border-[#2DD4BF]"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">Valid email is required</span>
                )}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  {...register("phone")}
                  className="bg-[#1E293B] border-[#2DD4BF]/10 focus:border-[#2DD4BF]"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  {...register("message", { required: true })}
                  className="bg-[#1E293B] border-[#2DD4BF]/10 focus:border-[#2DD4BF]"
                  rows={5}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">Message is required</span>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#2DD4BF] hover:bg-[#2DD4BF]/80 text-[#0F172A]"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
