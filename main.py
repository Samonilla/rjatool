import streamlit as st
from st_pages import Page, Section, show_pages, add_page_title, hide_pages


add_page_title()
show_pages(
    [
        Page("Pages/home.py", "Home", "🏠"),
        Page("Pages/about.py", "About", "ℹ️"),
        Page("Pages/contact.py", "Contact", "📞"),
    ]
)

