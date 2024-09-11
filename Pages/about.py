import streamlit as st

st.title("About")
st.write("This app helps detect potential racial bias in criminal cases using data analysis.")

with open("../Assets/RJA4ALL Guide English (May 2024).pdf", "rb") as pdf_file:
    PDFbyte = pdf_file.read()
    st.download_button(
        label="Download RJA Guide",
        data=PDFbyte,
        file_name="RJA4ALL_Guide_English_May_2024.pdf",
        mime="application/pdf"
    )