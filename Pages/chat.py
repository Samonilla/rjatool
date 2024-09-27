import streamlit as st

st.title("Chat")
st.write("Chat with our LLM about your case")

with st.chat_message("user"):
    st.write("Hello 👋")
    prompt = st.chat_input("Say something")
if prompt:
    st.write(f"Chat with our RJA bot {prompt}")

