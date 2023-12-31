import { title } from "process";

export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefit',
  OurClasses = 'ourclasses',
  Testimonials = 'testimonials',
  ContactUs = 'contactus'
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface testimonialType {
  id: number;
  name: string;
  image: string;
  title?: string;
  testimonial: string;
}