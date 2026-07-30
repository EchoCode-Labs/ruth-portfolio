"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";
import { navItems, profile } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" component="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: "space-between" }}>
          <Box
            component={NextLink}
            href="/"
            aria-label="Ruth Chika home"
            sx={{ display: "inline-flex", textDecoration: "none", color: "inherit" }}
          >
            <Logo />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Button
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  variant="text"
                  sx={{
                    color: active ? "brand.taupe" : "text.primary",
                    fontWeight: active ? 700 : 500,
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              component={NextLink}
              href="/contact"
              variant="contained"
              color="primary"
              size="medium"
            >
              Hire me
            </Button>
            <ThemeToggle />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { md: "none" } }}>
            <ThemeToggle />
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
              size="small"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ width: 280, height: "100%", p: 3 }} spacing={3}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{profile.name}</Typography>
            <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component={NextLink}
                href={item.href}
                onClick={() => setOpen(false)}
                selected={
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                }
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            component={NextLink}
            href="/contact"
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Hire me
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}