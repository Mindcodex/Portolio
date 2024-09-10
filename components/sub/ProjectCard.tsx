import Image from "next/image";


interface Props {
  src: string;
  title: string;
  description: string;
  inProgress?: boolean
}

const ProjectCard = ({ src, title, description, inProgress = false }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-lg border border-neutral-300">
      { inProgress ? <span className="text-neutral-900 rounded-sm font-semibold text-center top-[167px] right-3 absolute w-24 bg-white">In Progress</span> : null}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover"
      />

      <div className="relative p-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
