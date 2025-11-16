export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    company: 'Tech Solutions Pvt Ltd',
    rating: 5,
    text: 'Yuva Global Enterprises has been our trusted partner for facility management. Their professional approach and attention to detail is commendable.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'HR Director',
    company: 'Global Industries',
    rating: 5,
    text: 'Excellent service quality! Their manpower outsourcing solutions have helped us scale our operations efficiently.'
  },
  {
    id: 3,
    name: 'Mohammed Iqbal',
    role: 'Procurement Head',
    company: 'Kashmir Enterprises',
    rating: 5,
    text: 'Best stationery supplier in the region. Quality products at competitive prices with timely delivery.'
  },
  {
    id: 4,
    name: 'Anjali Verma',
    role: 'Office Administrator',
    company: 'Education Hub',
    rating: 5,
    text: 'Their general order supplies service is outstanding. One-stop solution for all our office needs.'
  }
];
