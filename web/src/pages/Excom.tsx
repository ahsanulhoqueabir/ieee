import CommiteeView from "@/components/excom/CommiteView";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useParams } from "react-router-dom";

const Excom = () => {
  const { year } = useParams();
  const defaultYear = new Date().getFullYear().toString();
  const currentYear = year ? year : defaultYear;
  return (
    <div className="py-14 px-5 lg:px-20">
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <p className=" uppercase text-xs lg:text-sm">
          IEEE Computer Society Jagannath University Chapter
        </p>
        <h3 className=" font-semibold text-2xl lg:text-4xl">
          Executive Committee {year}
        </h3>
      </div>
      <div>
        <Tabs defaultValue="sbc">
          <TabsList className="flex mx-auto lg:gap-5  space-x-4 space-y-2 md:space-y-0 mb-20 text-2xl items-center lg:justify-center flex-wrap ">
            <TabsTrigger
              className="border-[2px] border-[#f2a218]  lg:text-2xl p-5"
              value="sbc"
            >
              Student Branch
            </TabsTrigger>
            <TabsTrigger
              className="border-[2px] border-[#f2a218] lg:text-2xl p-5"
              value="cssbc"
            >
              CS Student Branch
            </TabsTrigger>
            <TabsTrigger
              className="border-[2px] border-[#f2a218] lg:text-2xl p-5"
              value="wiesbc"
            >
              WIE Affinity Student Branch
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sbc">
            <CommiteeView year={currentYear} section={"sbc"} />
          </TabsContent>
          <TabsContent value="cssbc">
            <CommiteeView year={currentYear} section={"cssbc"} />
          </TabsContent>
          <TabsContent value="wiesbc">
            <CommiteeView year={currentYear} section={"wiesbc"} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Excom;
