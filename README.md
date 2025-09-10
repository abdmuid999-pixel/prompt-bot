# PromptBot Template (GitHub-ready)

This template creates an Electron desktop app + Express backend that uses Gemini (Google AI) to generate video prompts from images or text.

## Quick use

1. Create a new repo on GitHub.
2. Upload the contents of this template (or use this as a template repo).
3. In the repo, go to Actions → wait for the workflow to finish.
4. Download the artifact `PromptBot-Installer.zip` from Actions → extract → run `PromptBot Setup.exe`.

## Configure
Create a `.env` file in the root with:

GEMINI_API_KEY=YOUR_KEY_HERE
PORT=3001
SECRET_LOCAL_ENCRYPTION=some_secret

## Notes
- The provided code is a working starter. If the Gemini/OpenAI SDK versions change, adjust providers accordingly.
