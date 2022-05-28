import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as services from "../services/httpApiRequests";
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from "../components/card/index";
import Table from '../components/table';
import Pagination from '../components/pagination';

const Home: NextPage = () => {
  interface Collaborators {
    agent_id: number,
    name: string,
    image: string,
    department: string,
    branch: string,
    role: string,
    status: string
  };

  const [collaborator, setCollaborator] = useState<[Collaborators]>();

  const getListOfContributors = (): void => {
    services.client.get("/agents")
      .then(res => setCollaborator(res.data.items))
      .catch(err => console.log(err.response.data));
  };

  useEffect(() => {
    getListOfContributors();
  }, []);

  const collaborators = collaborator?.map(collaborator => {
    return <Card
      img={
        <Avatar 
          src={collaborator.image} 
          alt={collaborator.name} 
          style={{width: "32px", height: "32px"}} 
        />
      }
      name={collaborator.name}
      department={collaborator.department}
      role={collaborator.role}
      branch={collaborator.branch}
      status={collaborator.status === 'active' ? 'Ativo' : 'Inativo'}
      more={<MoreVertIcon />}
    />
  })

  return (
    <div>
      <main>
        <Table
          fullName='Nome completo'
          department='Departamento'
          role='Cargo'
          branch='Unidade'
          status='Status'
        />
        {collaborators?.filter((item, index) => {
          if (index <= 5) {
            return item;
          }
        })}
        <Pagination/>
      </main>
    </div>
  );
};

export default Home;

