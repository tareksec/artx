import sys
import zipfile
import xml.etree.ElementTree as ET

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def validate_pptx(filename="artx_partnership_proposal.pptx"):
    print(f"Validating {filename}...")
    try:
        with zipfile.ZipFile(filename, 'r') as z:
            namelist = z.namelist()
            slides = [name for name in namelist if name.startswith("ppt/slides/slide") and name.endswith(".xml")]
            print(f"Total slides found: {len(slides)}")
            
            if len(slides) != 8:
                print(f"[WARN] Expected 8 slides, found {len(slides)}")
                return False
            else:
                print("[OK] Exact 8 slides verified.")
                
            for i in range(1, len(slides) + 1):
                slide_path = f"ppt/slides/slide{i}.xml"
                slide_xml = z.read(slide_path)
                root = ET.fromstring(slide_xml)
                texts = []
                for t in root.iter():
                    if t.tag.endswith('}t') and t.text:
                        texts.append(t.text)
                print(f"Slide {i} validated ({len(texts)} text elements)")
                
        print("\n[SUCCESS] Presentation validation passed!")
        return True
    except Exception as e:
        print(f"[ERROR] Validation failed: {e}")
        return False

if __name__ == "__main__":
    file = sys.argv[1] if len(sys.argv) > 1 else "artx_partnership_proposal.pptx"
    validate_pptx(file)
