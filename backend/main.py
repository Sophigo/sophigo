import jwt
import datetime
from fastapi import FastAPI, Depends, HTTPException, status, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Sophigo Backend API")

# Setup CORS to support local development on separate ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = "sophigo_secret_key_123456"
ALGORITHM = "HS256"

# In-memory "databases" for users and comments
MOCK_USERS = {
    "13800138000": {"uid": "10023", "username": "Creator_Pro", "role": "authenticated"},
    "wechat_simulated": {"uid": "10024", "username": "WeChat_User", "role": "authenticated"}
}

MOCK_COMMENTS = [
    {
        "id": 1,
        "text": "这个关于移动机器人底盘的控制算法写得非常清晰，期待后面的ROS2实践课！",
        "highlight": "移动机器人底盘的控制算法",
        "selector": ".content",
        "username": "Creator_Pro",
        "created_at": "2026-06-01 12:00:00"
    },
    {
        "id": 2,
        "text": "CMF规范里关于阳极氧化工艺的厚度标准是否有更新？",
        "highlight": "阳极氧化工艺",
        "selector": ".content",
        "username": "WeChat_User",
        "created_at": "2026-06-01 14:30:00"
    }
]

class UserLogin(BaseModel):
    phone: str
    code: str

class WeChatLogin(BaseModel):
    code: str

class CommentCreate(BaseModel):
    text: str
    highlight: str
    selector: Optional[str] = ""

def create_jwt_token(uid: str, username: str, role: str) -> str:
    payload = {
        "sub": uid,
        "username": username,
        "role": role,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or invalid authentication header"
        )
    token = authorization.split(" ")[1]
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired"
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )

@app.post("/api/auth/login", tags=["Authentication"])
async def login(user: UserLogin):
    # Mock SMS code verification: accept any 6-digit code or "123456" for demo
    if not user.phone or len(user.phone) < 11:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="请输入正确的手机号"
        )
    if user.code != "123456" and len(user.code) != 6:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="验证码不正确 (演示模式请输入 123456)"
        )
    
    # Get or create mock user
    user_info = MOCK_USERS.get(user.phone, {"uid": f"user_{user.phone[-4:]}", "username": f"User_{user.phone[-4:]}", "role": "authenticated"})
    token = create_jwt_token(user_info["uid"], user_info["username"], user_info["role"])
    
    return {
        "status": "success",
        "token": token,
        "username": user_info["username"],
        "uid": user_info["uid"]
    }

@app.post("/api/auth/wechat-login", tags=["Authentication"])
async def wechat_login(data: WeChatLogin):
    # Mock WeChat QR login code validation
    if not data.code:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="微信登录凭证无效"
        )
    
    user_info = MOCK_USERS["wechat_simulated"]
    token = create_jwt_token(user_info["uid"], user_info["username"], user_info["role"])
    
    return {
        "status": "success",
        "token": token,
        "username": user_info["username"],
        "uid": user_info["uid"]
    }

@app.get("/api/user/profile", tags=["User"])
async def get_profile(current_user: dict = Depends(get_current_user)):
    return {
        "uid": current_user["sub"],
        "username": current_user["username"],
        "role": current_user["role"]
    }

@app.get("/api/comments", tags=["Comments"])
async def list_comments():
    return MOCK_COMMENTS

@app.post("/api/comments", tags=["Comments"])
async def add_comment(comment: CommentCreate, current_user: dict = Depends(get_current_user)):
    new_comment = {
        "id": len(MOCK_COMMENTS) + 1,
        "text": comment.text,
        "highlight": comment.highlight,
        "selector": comment.selector,
        "username": current_user["username"],
        "created_at": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    MOCK_COMMENTS.append(new_comment)
    return new_comment
