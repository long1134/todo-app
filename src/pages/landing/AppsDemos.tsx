import { Box, Grid } from "@mui/material";
import { ContainerBox } from './Navbar'
import { SectionTitle, DemoCard } from "./components";
import { DemoCardProps } from "./components/DemoCard";

// images
import calendarImg from "@src/assets/images/landing/calendar.png"
import chatImg from "@src/assets/images/landing/chat.png"
import emailInboxImg from "@src/assets/images/landing/email-inbox.png"
import emailReadImg from "@src/assets/images/landing/email-read.png"
import taskListImg from "@src/assets/images/landing/task-list.png"
import taskDetailImg from "@src/assets/images/landing/task-detail.png"
import kanbanImg from "@src/assets/images/landing/kanban.png"
import fileManagerImg from "@src/assets/images/landing/file-manager.png"

const appDemos: DemoCardProps[] = [
  {
    link: '/apps/calendar',
    image: calendarImg,
    name: 'Calendar',
  },
  {
    link: '/apps/chat',
    image: chatImg,
    name: 'Chat',
  },
  {
    link: '/apps/email/inbox',
    image: emailInboxImg,
    name: 'Email Inbox',
  },
  {
    link: '/apps/email/read',
    image: emailReadImg,
    name: 'Read Email',
  },
  {
    link: '/apps/tasks/list',
    image: taskListImg,
    name: 'Task List',
  },
  {
    link: '/apps/tasks/details',
    image: taskDetailImg,
    name: 'Task Detail',
  },
  {
    link: '/apps/kanban',
    image: kanbanImg,
    name: 'Kanban',
  },
  {
    link: '/apps/file-manager',
    image: fileManagerImg,
    name: 'File Manager',
  },
]

const AppsDemos = () => {
  return (
    <Box sx={{ py: '5rem', backgroundColor: "background.paper" }} id="apps">

      <ContainerBox>

        <SectionTitle name="Applications" title="App Pages" description="Prebuilt working apps, just do your thing and Rock N Roll." />

        <Grid
          container
          spacing={4}
          data-aos="fade-up"
          data-aos-duration={1000}
        >

          {appDemos.map((app) => (
            <Grid item lg={4} md={6} xs={12} key={app.link}>
              <DemoCard
                link={app.link}
                image={app.image}
                name={app.name}
              />
            </Grid>
          ))}

        </Grid>
      </ContainerBox>
    </Box>
  )
}

export default AppsDemos