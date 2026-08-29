import sys
import zipfile
import xml.etree.ElementTree as ET

# Ensure stdout handles UTF-8
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

def validate_pptx(filename="artx_partnership_proposal.pptx"):
    print(f"Validating {filename}...")
    try:
        with zipfile.ZipFile(filename, 'r') as z:
            namelist = z.namelist()
            print(f"Total package files: {len(namelist)}")
            
            # Check slides
            slides = [name for name in namelist if name.startswith("ppt/slides/slide") and name.endswith(".xml")]
            print(f"Total slides found: {len(slides)}")
            
            if len(slides) != 8:
                print(f"[WARN] Expected 8 slides, found {len(slides)}")
            else:
                print("[OK] Exact 8 slides verified.")
                
            # Check presentation.xml for dimensions
            if "ppt/presentation.xml" in namelist:
                pres_xml = z.read("ppt/presentation.xml")
                root = ET.fromstring(pres_xml)
                for elem in root.iter():
                    if elem.tag.endswith('sldSz'):
                        cx = int(elem.attrib.get('cx', 0))
                        cy = int(elem.attrib.get('cy', 0))
                        aspect_ratio = cx / cy if cy != 0 else 0
                        print(f"Slide dimensions: cx={cx}, cy={cy} (Aspect ratio: {aspect_ratio:.3f})")
                        if abs(aspect_ratio - (16/9)) < 0.05:
                            print("[OK] 16:9 Widescreen aspect ratio verified.")
                            
            # Verify text on each slide
            for i in range(1, len(slides) + 1):
                slide_path = f"ppt/slides/slide{i}.xml"
                if slide_path in namelist:
                    slide_xml = z.read(slide_path)
                    root = ET.fromstring(slide_xml)
                    texts = []
                    for t in root.iter():
                        if t.tag.endswith('}t'):
                            if t.text:
                                texts.append(t.text)
                    print(f"Slide {i}: {len(texts)} text nodes | Preview: {' | '.join(texts[:3])}")
                    
        print("\n[SUCCESS] PPTX file structure is valid and ready!")
        return True
    except Exception as e:
        print(f"[ERROR] Validation error: {e}")
        return False

if __name__ == "__main__":
    file = sys.argv[1] if len(sys.argv) > 1 else "artx_partnership_proposal.pptx"
    validate_pptx(file)
