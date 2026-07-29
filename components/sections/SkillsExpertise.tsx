import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/content";

export default function SkillsExpertise() {
  return (
    <PageSection tone="soft" id="skills">
      <Stack spacing={6}>
        <SectionHeading eyebrow="Skills & expertise" title="Where I add the most value" />
        <Grid container spacing={4}>
          {skillGroups.map((group) => (
            <Grid key={group.title} size={{ xs: 12, sm: 6 }}>
              <Stack spacing={1.5}>
                <Typography variant="h5">{group.title}</Typography>
                <List dense disablePadding>
                  {group.items.map((item) => (
                    <ListItem
                      key={item}
                      disableGutters
                      sx={{ py: 0.5, display: "flex", gap: 1.25, alignItems: "flex-start" }}
                    >
                      <Box
                        sx={{
                          mt: 1,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "brand.taupe",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageSection>
  );
}