#!/usr/bin/env python3
"""
Favicon Generator Script
Converts image1.png to favicon files with rounded corners for Next.js App Router
"""

from PIL import Image, ImageDraw
import os

def add_rounded_corners(img, radius):
    """Add rounded corners to an image"""
    # Create a mask for rounded corners
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    
    # Draw a rounded rectangle
    draw.rounded_rectangle(
        [(0, 0), img.size],
        radius=radius,
        fill=255
    )
    
    # Apply the mask to the image
    output = Image.new('RGBA', img.size, (0, 0, 0, 0))
    output.paste(img, (0, 0))
    output.putalpha(mask)
    
    return output

def create_favicons():
    # Paths
    input_path = "public/assets/images/image1.png"
    output_dir = "src/app"
    
    print("🎨 Favicon Generator with Rounded Corners")
    print("=" * 50)
    
    # Check if input file exists
    if not os.path.exists(input_path):
        print(f"❌ Error: {input_path} not found!")
        return
    
    # Load the image
    print(f"📂 Loading image from {input_path}...")
    img = Image.open(input_path)
    
    # Ensure image is in RGBA mode
    if img.mode != 'RGBA':
        print(f"🔄 Converting image from {img.mode} to RGBA...")
        img = img.convert('RGBA')
    
    # Files to create in src/app
    files_to_create = [
        ("favicon.ico", [(16, 16), (32, 32), (48, 48)], [2, 4, 6]),  # radius for each size
        ("icon.png", (512, 512), 64),  # For Next.js App Router
        ("apple-icon.png", (180, 180), 24),  # For Apple devices
    ]
    
    for filename, sizes, radius_config in files_to_create:
        output_path = os.path.join(output_dir, filename)
        
        # Remove existing file if it exists
        if os.path.exists(output_path):
            os.remove(output_path)
            print(f"🗑️  Removed existing {output_path}")
        
        if filename.endswith('.ico'):
            # Create ICO with RGBA PNGs inside with rounded corners
            print(f"🔧 Creating {output_path} with sizes: {sizes}")
            
            # Create resized versions with rounded corners
            icons = []
            for i, size in enumerate(sizes):
                resized = img.resize(size, Image.Resampling.LANCZOS)
                rounded = add_rounded_corners(resized, radius_config[i])
                icons.append(rounded)
            
            # Save as ICO
            icons[0].save(
                output_path,
                format='ICO',
                append_images=icons[1:],
                sizes=sizes
            )
        else:
            # Create PNG with rounded corners
            print(f"🔧 Creating {output_path} ({sizes[0]}x{sizes[1]}) with rounded corners")
            resized = img.resize(sizes, Image.Resampling.LANCZOS)
            rounded = add_rounded_corners(resized, radius_config)
            rounded.save(output_path, format='PNG')
        
        print(f"✅ Created {output_path} ({os.path.getsize(output_path)} bytes)")
    
    print("=" * 50)
    print("🎉 Done! Your rounded corner favicons are ready to use.")
    print("\n📁 Created files in src/app/:")
    print("   • favicon.ico (rounded corners)")
    print("   • icon.png (rounded corners)")
    print("   • apple-icon.png (rounded corners)")
    print("\n💡 Next steps:")
    print("   1. Restart your Next.js dev server")
    print("   2. Clear your browser cache (Ctrl+Shift+R)")
    print("   3. Check the browser tab for your new rounded icon")
    print("\n📝 Next.js will automatically detect these files!")

if __name__ == "__main__":
    try:
        create_favicons()
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
        print("\n💡 Make sure you have Pillow installed:")
        print("   pip install Pillow")
