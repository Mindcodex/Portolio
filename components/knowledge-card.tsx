import { cppSvg, rustSvg } from "@/public/svg"
import Image from "next/image"
interface Props {
    src: string
    alt:string
}
const KnowledgeCard = ({src, alt}:Props) => {
    return (
      <div className="flex gap-x-3">
        <div className="flex justify-center backdrop-blur-md outline outline-[0.1px] outline-[#fefefe]/25 w-[160px] h-[120px]  bg-gradient-to-tl from-[#151A21]/55 from-10% via-[#333]/75  to-[#14171B]/55 rounded-lg">
          <Image src={src} width={64} alt="" />
        </div>
      </div>
    )
  }
  
  export default KnowledgeCard