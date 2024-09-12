from langchain.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

def generate(transcript, jury_data, sentencing_records, statements):
    llm = Ollama(model="llama3.1")
    
    prompt_template = PromptTemplate(
        input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements'],
        template="I am trying to see if I have a potential Racial Justice Act of California. Provided here is the transcript of the trial {transcript}, here is the jury selection data {jury_data}, here is the sentencing records {sentencing_records}, and here are the prosecutor and defense statements {statements}."
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)
    
    response = chain.run({
        "transcript": transcript,
        "jury_data": jury_data,
        "sentencing_records": sentencing_records,
        "statements": statements
    })

    return response