from PIL import Image
import pytesseract
import re

def extract_text_from_image(image_path):
    """Reads an image and extracts text using OCR."""
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image).strip()
        return text
    except Exception as e:
        print(f"Error loading image: {e}")
        return None

def find_math_expression(text):
    """Searches for a mathematical expression in the extracted text."""
    pattern = r"([\d\+\-\*/\^\(\)]+(?:\?|\=)?)"
    match = re.search(pattern, text)
    if match:
        return match.group(0).replace("=", "").strip()
    return None

def evaluate_expression(expression):
    """Evaluates a mathematical expression safely."""
    try:
        result = eval(expression, {"__builtins__": {}})
        return result
    except Exception as e:
        print(f"Error evaluating the expression: {e}")
        return None

def main():
    image_path = "/home/s-manideep-rap/Downloads/simple.png"  # Update with correct image path
    
    # Step 1: Extract text from the image
    extracted_text = extract_text_from_image(image_path)
    if not extracted_text:
        print("Failed to extract text from the image.")
        return

    print(f"Extracted Text: {extracted_text}")

    # Step 2: Find a math expression in the extracted text
    expression = find_math_expression(extracted_text)
    if not expression:
        print("No valid mathematical expression found.")
        return

    print(f"Expression to Evaluate: {expression}")

    # Step 3: Evaluate the math expression
    result = evaluate_expression(expression)
    if result is not None:
        print(f"Result: {result}")
    else:
        print("Could not evaluate the expression.")

if __name__ == "__main__":
    main()


