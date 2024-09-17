from langchain.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# this needs llama3.1 model to be downloaded and running on your machine

# def generate(transcript, jury_data, sentencing_records, statements):
#     llm = Ollama(model="llama3.1")
    
#     prompt_template = PromptTemplate(
#         input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements'],
#         template="I am trying to see if I have a potential Racial Justice Act of California. Provided here is the transcript of the trial {transcript}, here is the jury selection data {jury_data}, here is the sentencing records {sentencing_records}, and here are the prosecutor and defense statements {statements}."
#     )

#     chain = LLMChain(llm=llm, prompt=prompt_template)
    
#     response = chain.run({
#         "transcript": transcript,
#         "jury_data": jury_data,
#         "sentencing_records": sentencing_records,
#         "statements": statements
#     })

#     return response

def generate_claim_1(transcript, jury_data, sentencing_records, statements):
    # Claim 1: Assess bias by a judge, attorney, police officer, or expert witness towards the defendant.
    llm = Ollama(model="llama3.1")
    
    prompt_template = PromptTemplate(
        input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements'],
        template="Assess if there was any bias by a judge, attorney, police officer, or expert witness towards the defendant because of their race, ethnicity, or national origin. Here is the transcript: {transcript}, jury data: {jury_data}, sentencing records: {sentencing_records}, and statements: {statements}."
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)
    
    response = chain.run({
        "transcript": transcript,
        "jury_data": jury_data,
        "sentencing_records": sentencing_records,
        "statements": statements
    })

    return response

def generate_claim_2(transcript, jury_data, sentencing_records, statements):
    # Claim 2: Identify racially coded statements against the defendant at trial.
    llm = Ollama(model="llama3.1")
    
    prompt_template = PromptTemplate(
        input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements'],
        template="Identify if there were racially coded statements against the defendant at trial. Here is the transcript: {transcript}, jury data: {jury_data}, sentencing records: {sentencing_records}, and statements: {statements}."
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)
    
    response = chain.run({
        "transcript": transcript,
        "jury_data": jury_data,
        "sentencing_records": sentencing_records,
        "statements": statements
    })

    return response

def generate_claim_3(transcript, jury_data, sentencing_records, statements, example_cases):
    # Claim 3: Determine if the prosecution sought more severe charges against the defendant.
    llm = Ollama(model="llama3.1")

    prompt_template = PromptTemplate(
        input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements', 'example_cases'],
        template="Determine if the prosecution sought more severe charges against the defendant compared to other similarly situated cases in the county. Here is the transcript: {transcript}, jury data: {jury_data}, sentencing records: {sentencing_records}, statements: {statements}, and example cases: {example_cases}."
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)

    response = chain.run({
        "transcript": transcript,
        "jury_data": jury_data,
        "sentencing_records": sentencing_records,
        "statements": statements,
        "example_cases": example_cases
    })

    return response

def generate_claim_4(transcript, jury_data, sentencing_records, statements, example_cases):
    # Claim 4: Evaluate if the court imposed a more severe sentence on the defendant.
    llm = Ollama(model="llama3.1")

    prompt_template = PromptTemplate(
        input_variables=['transcript', 'jury_data', 'sentencing_records', 'statements', 'example_cases'],
        template="Evaluate if the court imposed a more severe sentence on the defendant compared to other similarly situated cases in the county. Here is the transcript: {transcript}, jury data: {jury_data}, sentencing records: {sentencing_records}, statements: {statements}, and example cases: {example_cases}."
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)

    response = chain.run({
        "transcript": transcript,
        "jury_data": jury_data,
        "sentencing_records": sentencing_records,
        "statements": statements,
        "example_cases": example_cases
    })

    return response