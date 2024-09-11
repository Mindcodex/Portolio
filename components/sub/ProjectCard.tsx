import Image from "next/image";
import Link from "next/link";


interface Props {
  src: string;
  href?: string;
  title: string;
  description: string;
  inProgress?: boolean
}

const ProjectCard = ({ src, title, description, inProgress = false, href="#" }: Props) => {
  return (
    <div className="lg:w-[460px] lg:h-[420px] relative overflow-hidden rounded-md shadow-lg border border-neutral-300 z-50">
      {inProgress ? <span className="text-neutral-900 font-semibold opacity-[90%] text-center  top-[0px] bg-blue-500 w-full block rounded-t-md">In Progress</span> : null}
      <a href={href}>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </a>

      <div className="relative p-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
