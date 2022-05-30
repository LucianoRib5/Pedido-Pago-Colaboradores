import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as services from "../services/httpApiRequests";
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { 
  Card, 
  Pagination, 
  Table, 
  Subtitle, 
  Input, 
  Category, 
  Header, 
  Sidebar,
  Title 
}
 from "../components";
import { Container, Main, Content, List, Tab } from "../styles/HomePage/styles";

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
      key={collaborator.agent_id}
      img={
        <Avatar
          src={collaborator.image}
          alt={collaborator.name}
          style={{ width: "32px", height: "32px" }}
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
      <Header/>
      <Container>
        <Sidebar/>
        <Main>
          <Content>
            <Title/>
            <Tab>
              <Category
                contributors='Colaboradores'
                roles='Cargos'
                borderContributors='2px solid #22E0A1'
              />
              <Input/>
              <Subtitle
                subtitle='Lista de colaboradores'
              />
              <List>
                <Table
                  fullName='Nome completo'
                  department='Departamento'
                  role='Cargo'
                  branch='Unidade'
                  status='Status'
                />
                <div>
                  {collaborators?.filter((item, index) => {
                    if (index <= 5) {
                      return item;
                    }
                  })}
                </div>
                <Pagination />
              </List>
            </Tab>
          </Content>
        </Main>
      </Container>
    </div>
  );
};

export default Home;

