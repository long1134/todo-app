import { Box, IconButton, Link, Typography, alpha } from "@mui/material";
import { useLayoutContext } from "@src/states";
import { LuExternalLink } from "react-icons/lu";

export type DemoCardProps = {
  link: string;
  image: string;
  name: string;
}

const DemoCard = ({ link, image, name }: DemoCardProps) => {
  const { themeMode } = useLayoutContext()
  return (
    <Link href={link} target="_blank">
      <Box sx={{
        position: 'relative',
        borderRadius: '8px',
        textAlign: 'center',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '500ms',
        boxShadow: (theme) => theme.shadows[6],
        "&:hover": {
          "& > .preview-button": {
            opacity: 100,
          }
        }
      }}>
        <Box sx={{ padding: '20px', backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05) }}>
          <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <img alt="demo-img" style={{ width: '100%', borderRadius: '8px' }} src={image} />
            <Box sx={{
              position: 'absolute', inset: 0, display: 'flex', height: '100%', width: '100%', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.25), opacity: 0, transitionProperty: 'all',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '300ms',
            }}
            >
              <Typography sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', backgroundColor: 'primary.main', py: '6px', paddingInlineEnd: '8px', paddingInlineStart: '20px', textAlign: 'center', verticalAlign: 'middle', transitionDuration: '300ms', "&:hover": { backgroundColor: 'primary.dark' } }}>
                Live Preview
                <IconButton>
                  <LuExternalLink size={20} />
                </IconButton>
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" sx={{ marginTop: '20px', textAlign: 'center', color: themeMode == 'light' ? 'primary.darker' : 'primary.lighter', fontWeight: 600, textDecoration: 'none' }}>
            {name}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
};

export default DemoCard;
