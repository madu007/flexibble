import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal"
import ProjectFrom from "@/components/ProjectFrom"
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation";

const EditProject = async ({ params: { id }}: { params: { id: string}}) => {

    const session = await getCurrentUser();

    if(!session?.user) redirect('/');

    const result = await getProjectDetails(id) as {
      project?: ProjectInterface
    }

  return (
    <Modal>
        <h3 className="modal-head-text">Edit Project</h3>

        <ProjectFrom type='edit' session={session} project={result?.project} />
    </Modal>
  )
}

export default EditProject